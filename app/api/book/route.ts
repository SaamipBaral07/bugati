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

    const mailToCustomer = {
      from: `"DJ Bugati" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "We Received Your Enquiry — DJ Bugati Perth",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #1a1a1a;">Thank You, ${fullName}!</h2>
          
          <p>We've received your booking enquiry and really appreciate you reaching out to DJ Bugati.</p>
          
          <p><strong>We will review your details and contact you within 24 hours</strong> to discuss your event and answer any questions you may have.</p>
          
          <h3 style="margin-top: 30px; color: #1a1a1a; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">Submission Details</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold; width: 150px;">Full Name:</td>
              <td style="padding: 12px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Email:</td>
              <td style="padding: 12px;">${email}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold;">Phone:</td>
              <td style="padding: 12px;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Event Type:</td>
              <td style="padding: 12px;">${eventType}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold;">Event Date:</td>
              <td style="padding: 12px;">${eventDate}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold;">Location:</td>
              <td style="padding: 12px;">${location || "Not provided"}</td>
            </tr>
            <tr style="background-color: #f9fafb;">
              <td style="padding: 12px; font-weight: bold;">Guests:</td>
              <td style="padding: 12px;">${guests || "Not provided"}</td>
            </tr>
          </table>
          
          ${message ? `
            <h3 style="margin-top: 30px; color: #1a1a1a; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">Your Message</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #fbbf24; border-radius: 4px;">
              ${message.replace(/\n/g, "<br/>")}
            </p>
          ` : ""}
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />
          
          <p style="color: #666; font-size: 14px;">
            <strong>What's next?</strong><br/>
            DJ Bugati will reach out to discuss your event details, availability, music preferences, and any special requirements. We look forward to making your event unforgettable!
          </p>
          
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            <strong>DJ Bugati Perth</strong><br/>
            Professional DJ Services | Weddings • Corporate Events • Parties<br/>
            <a href="https://www.instagram.com/dj.bugati/" style="color: #1f2937; text-decoration: none;">Instagram</a> | 
            <a href="https://www.youtube.com/@djbugati-yr8th" style="color: #1f2937; text-decoration: none;">YouTube</a> | 
            <a href="https://www.tiktok.com/@dj.bugati" style="color: #1f2937; text-decoration: none;">TikTok</a>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailToDJ);
    await transporter.sendMail(mailToCustomer);

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Something went wrong sending the email." },
      { status: 500 }
    );
  }
}
