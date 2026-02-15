"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/Motion";
import { Instagram, Youtube, Music, Music2 } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [startedAt, setStartedAt] = useState<number>(Date.now());
  const [countryCode, setCountryCode] = useState("+61");

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setDone(false);
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const phoneNumber = form.get("phone");
    const fullPhone = phoneNumber ? `${countryCode} ${phoneNumber}` : "";

    const payload = {
      fullName: form.get("fullName"),
      email: form.get("email"),
      phone: fullPhone,
      eventType: form.get("eventType"),
      eventDate: form.get("eventDate"),
      location: form.get("location"),
      guests: form.get("guests"),
      message: form.get("message"),
      website: form.get("website"), // honeypot
      startedAt,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setDone(true);
      (e.target as HTMLFormElement).reset();
      setStartedAt(Date.now());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <FadeUp>
        <p className="text-sm font-medium tracking-widest text-neutral-500">
          BOOKINGS & ENQUIRIES
        </p>

        <h1 className="mt-3 text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">
          Contact DJ Bugati
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
          Based in Perth, Australia. For weddings, birthdays, corporate events
          and private parties — send an enquiry below and DJ Bugati will reply
          within 24 hours.
        </p>
      </FadeUp>

      <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-10 lg:grid-cols-2">
        {/* Left: Contact + Socials */}
        <FadeUp delay={0.05}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Quick Contact
            </h2>

            <div className="mt-6 space-y-3 text-neutral-700">
              <p>
                <span className="font-medium text-neutral-900">Location:</span>{" "}
                Perth, Australia
              </p>
              <p>
                <span className="font-medium text-neutral-900">Email:</span>{" "}
                djbugati@gmail.com
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:djbugati@gmail.com"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Email DJ Bugati
              </a>

              <Link
                href="/socials"
                className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                View Socials
              </Link>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <h3 className="text-lg font-semibold text-neutral-900">
                Social Links
              </h3>

              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.instagram.com/dj.bugati/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E4405F] text-[#E4405F] transition-all hover:bg-[#E4405F] hover:text-white"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@djbugati-yr8th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FF0000] text-[#FF0000] transition-all hover:bg-[#FF0000] hover:text-white"
                  title="YouTube"
                >
                  <Youtube size={20} />
                </a>
             
                <a
                  href="https://www.tiktok.com/@dj.bugati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#000000] text-[#000000] transition-all hover:bg-[#000000] hover:text-white"
                  title="TikTok"
                >
                  <Music2 size={20} />
                </a>
              </div>
            </div>

            {/* Perth Map */}
            <div className="mt-10">
              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=115.7417%2C-32.1063%2C116.0654%2C-31.8048&layer=mapnik&marker=-31.9523%2C115.8613"
                  className="aspect-[16/10] w-full border-0"
                  loading="lazy"
                  title="Perth, Australia Map"
                />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Right: Form */}
        <FadeUp delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:rounded-3xl md:p-10"
          >
            {/* Honeypot */}
            <div className="hidden">
              <label>
                Website
                <input name="website" />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="fullName"
                required
                placeholder="Full Name *"
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email *"
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-32 rounded-2xl border border-neutral-300 bg-white px-3 py-3 text-neutral-900 outline-none focus:border-neutral-900"
                >
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+977">🇳🇵 +977</option>
                  <option value="+86">🇨🇳 +86</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+49">🇩🇪 +49</option>
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+39">🇮🇹 +39</option>
                  <option value="+34">🇪🇸 +34</option>
                  <option value="+64">🇳🇿 +64</option>
                  <option value="+65">🇸🇬 +65</option>
                </select>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
                />
              </div>
              <select
                name="eventType"
                required
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
              >
                <option value="">Select Event Type *</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Corporate Event</option>
                <option>Private Party</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="eventDate"
                type="date"
                required
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-900"
              />
              <input
                name="location"
                placeholder="Event Location * "
                className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
                required
              />
            </div>

            <input
              name="guests"
              placeholder="Estimated Guests (optional)"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
            />

            <textarea
              name="message"
              placeholder="Tell me about your event (music style, timing, venue, special requests...)"
              rows={5}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
            />

            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}

            {done && (
              <p className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Enquiry sent successfully! DJ Bugati will reply soon.
              </p>
            )}

            <button
              disabled={loading}
              className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

            <p className="text-xs text-neutral-500">
              By submitting this form you agree to be contacted regarding your
              event enquiry.
            </p>
          </form>
        </FadeUp>
      </div>
    </div>
  );
}
