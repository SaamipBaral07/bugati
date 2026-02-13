import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const rateMap = new Map<string, { count: number; last: number }>();

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // --- basic rate limit (per IP)
    const now = Date.now();
    const existing = rateMap.get(ip);


      



    if (existing) {
      // reset every 10 minutes
      if (now - existing.last > 10 * 60 * 1000) {
        rateMap.set(ip, { count: 1, last: now });
      } else {
        if (existing.count >= 6) {
          return Response.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        rateMap.set(ip, { count: existing.count + 1, last: now });
      }
    } else {
      rateMap.set(ip, { count: 1, last: now });
    }

    const body = await req.json();
    if (body.website) return NextResponse.json({ error: "Spam detected" }, { status: 400 });

const seconds = (Date.now() - body.startedAt) / 1000;
if (seconds < 3) return NextResponse.json({ error: "Spam detected" }, { status: 400 });


    const {
      fullName,
      email,
      phone,
      eventType,
      eventDate,
      location,
      guests,
      message,
      website, // honeypot
      startedAt, // time check
    } = body;

    // --- honeypot check
    if (website && String(website).trim() !== "") {
      return Response.json({ success: true }); // pretend success
    }

    // --- minimum time check (3 seconds)
    if (startedAt) {
      const ms = now - Number(startedAt);
      if (ms < 3000) {
        return Response.json({ success: true }); // pretend success
      }
    }

    if (!fullName || !email || !eventType || !eventDate) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailToDJ = {
      from: `"DJ Bugati Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.DJ_EMAIL,
      subject: `New Booking Enquiry — ${eventType} (${fullName})`,
      html: `
        <h2>New Booking Enquiry</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Event Type:</b> ${eventType}</p>
        <p><b>Event Date:</b> ${eventDate}</p>
        <p><b>Location:</b> ${location || "-"}</p>
        <p><b>Guests:</b> ${guests || "-"}</p>
        <p><b>Message:</b><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
        <hr/>
        <p style="font-size:12px;color:#777;">
          Sent from DJ Bugati website booking form.
        </p>
      `,
    };

    await transporter.sendMail(mailToDJ);

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Something went wrong sending the email." },
      { status: 500 }
    );
  }
}
