import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | DJ Bugati Perth",
  description:
    "DJ Bugati performs at weddings, birthdays, corporate events and private parties across Perth, Australia.",
};
const EVENTS = [
  {
    title: "Weddings",
    desc: "Elegant mixes, smooth transitions, and the perfect energy from ceremony to dancefloor.",
    points: ["Ceremony + Reception", "Luxury vibe & clean mixing", "Crowd reading"],
  },
  {
    title: "Birthdays",
    desc: "High energy, crowd favourites, and a party vibe tailored to your age group and guests.",
    points: ["Top hits + classics", "Custom playlist direction", "All age groups"],
  },
  {
    title: "Anniversaries",
    desc: "A classy, romantic vibe with the perfect balance of smooth music and dancefloor energy.",
    points: ["Romantic atmosphere", "Clean transitions", "Family-friendly options"],
  },
  {
    title: "Corporate Events",
    desc: "Professional setup, premium sound, and a clean vibe for company functions.",
    points: ["Formal + fun balance", "Professional presentation", "Reliable timing"],
  },
  {
    title: "Private Parties",
    desc: "House parties, celebrations, and private events with the right vibe from start to finish.",
    points: ["Flexible music style", "Smooth transitions", "Party energy"],
  },
  {
    title: "Engagements",
    desc: "Create an unforgettable atmosphere for your engagement with the perfect soundtrack.",
    points: ["Romantic + upbeat flow", "Modern hits", "Crowd interaction"],
  },
  {
    title: "Live Shows (Ticketed Events)",
    desc: "DJ Bugati performs at live shows hosted by event organisers, with tickets sold directly to the public.",
    points: ["Organiser hosted events", "Stage-ready performance", "High energy crowd sets"],
  },
  {
    title: "Club / Lounge Sets",
    desc: "Premium DJ sets for lounges, venues and nightlife events across Perth.",
    points: ["Afro / RnB / House", "Clean blends", "Venue-ready vibe"],
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-widest text-neutral-500">
          EVENTS
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-neutral-900 md:text-5xl">
          Events DJ Bugati Performs
        </h1>

        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          DJ Bugati is available across Perth, Australia for weddings, birthdays,
          corporate events, and private parties. Every set is tailored to your
          crowd — clean mixing, premium energy, and a luxury feel.
        </p>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Book an Event
          </Link>

          <Link
            href="/gallery"
            className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            View Gallery
          </Link>
        </div>
      </div>

      {/* Event Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <div
            key={e.title}
            className="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
          >
            {/* Image Placeholder */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <div className="flex aspect-[16/10] items-center justify-center">
                <p className="text-sm text-neutral-500">
                  Image Placeholder (add later)
                </p>
              </div>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-neutral-900">
              {e.title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {e.desc}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              {e.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Want a premium DJ experience for your event?
            </h3>
            <p className="mt-3 text-neutral-600">
              Send an enquiry and DJ Bugati will reply within 24 hours. Weddings,
              birthdays, corporate events and private parties across Perth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
              >
                Book DJ Bugati
              </Link>

              <Link
                href="/socials"
                className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                View Socials
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <div className="flex aspect-[16/10] items-center justify-center">
              <p className="text-sm text-neutral-500">
                Image Placeholder (DJ photo / event shot)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
