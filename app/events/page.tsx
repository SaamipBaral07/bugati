import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MotionWrap from "@/components/MotionWrap";

export const metadata: Metadata = {
  title: "Events | DJ Bugati Perth",
  description:
    "Professional DJ services for weddings, corporate events, and private parties across Perth, Australia.",
};

const FEATURED_EVENT = {
  title: "Weddings",
  desc: "Elegant mixes and seamless transitions from ceremony to dancefloor, creating the perfect atmosphere for your special day. Every moment is curated — from the walk-in to the last dance.",
  features: [
    "Ceremony & Reception",
    "First Dance Coordination",
    "Crowd Reading",
    "MC Services Available",
  ],
  image: "/images/wedding.jpg",
};

const EVENTS = [
  {
    title: "Corporate Events",
    desc: "Professional presentation, premium sound, and the right balance of formal and fun for company functions.",
    features: ["Award Ceremonies", "Product Launches", "Christmas Parties", "Team Events"],
    image: "/images/corporate.jpg",
  },
  {
    title: "Birthdays",
    desc: "High-energy parties tailored to your age group, from intimate gatherings to milestone celebrations.",
    features: ["Milestone Birthdays", "Custom Playlists", "All Age Groups", "Party Coordination"],
    image: "/images/birthday.jpg",
  },
  {
    title: "Private Parties",
    desc: "House parties, reunions, and private celebrations with the right vibe from start to finish.",
    features: ["House Parties", "Family Reunions", "Garden Parties", "Anniversary Celebrations"],
    image: "/images/people-party.jpg",
  },
  {
    title: "Nightclub & Lounge",
    desc: "Premium club sets featuring Afro, RnB, and House at Perth's finest venues and lounges.",
    features: ["Club Residencies", "Guest Appearances", "Lounge Sets", "Late Night Vibes"],
    image: "/images/clubb-dj.jpg",
  },
  {
    title: "Live Shows",
    desc: "Stage-ready performances for ticketed events and festivals across Western Australia.",
    features: ["Festival Sets", "Concert Appearances", "Artist Collaborations", "Stage Production"],
    image: "/images/bugati-1.jpg",
  },
  {
    title: "Engagements",
    desc: "Creating the perfect romantic atmosphere for proposals and engagement celebrations.",
    features: ["Proposal Music", "Engagement Parties", "Romantic Sets", "Photography Timing"],
    image: "/images/engagements.jpg",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* ════════════════════════════════════════════════════════════
          HERO — Light split layout with full image
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-stone-50/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-8 py-16 md:grid-cols-2 md:gap-12 md:py-24 lg:gap-16">
            {/* Text side */}
            <MotionWrap>
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-amber-600">
                  <span className="h-px w-8 bg-amber-500/50" />
                  Our Services
                </p>

                <h1 className="mt-6 font-playfair text-4xl font-medium leading-[1.1] text-neutral-900 sm:text-5xl md:text-5xl lg:text-6xl">
                  Events we{" "}
                  <span className="italic text-amber-600">bring to life</span>
                </h1>

                <p className="mt-6 text-base leading-relaxed text-black/55 sm:text-lg">
                  From intimate gatherings to large-scale celebrations, each event
                  receives the same attention to detail and professional execution.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:shadow-lg"
                  >
                    Book an Event
                  </Link>
                  <Link
                    href="/gallery"
                    className="rounded-full border border-black/12 bg-white px-7 py-3.5 text-sm font-medium text-neutral-900 transition-all hover:border-black/25 hover:bg-neutral-50"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            </MotionWrap>

            {/* Image side — fully visible, no overlay */}
            <MotionWrap delay={0.15}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:aspect-square md:max-h-[420px] md:rounded-3xl lg:max-h-[480px]">
                <Image
                  src="/images/bugati-2.jpg"
                  alt="DJ Bugati performing"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </MotionWrap>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FEATURED EVENT — Weddings (split layout)
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <MotionWrap>
          <div className="overflow-hidden rounded-3xl bg-neutral-50 md:rounded-[2rem]">
            <div className="grid items-stretch md:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={FEATURED_EVENT.image}
                  alt={FEATURED_EVENT.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay on mobile for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
                {/* Featured badge */}
                <div className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-lg">
                  Most Popular
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center p-7 sm:p-10 md:p-14">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-600">
                  Featured Service
                </p>
                <h2 className="mt-3 font-playfair text-3xl font-medium text-neutral-900 sm:text-4xl">
                  {FEATURED_EVENT.title}
                </h2>
                <p className="mt-4 leading-relaxed text-black/60">
                  {FEATURED_EVENT.desc}
                </p>

                {/* Feature chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {FEATURED_EVENT.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-medium text-amber-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg"
                >
                  Enquire Now
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </MotionWrap>
      </section>

      {/* ════════════════════════════════════════════════════════════
          EVENT GRID — Polished cards
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <MotionWrap>
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
              All Services
            </p>
            <h2 className="mt-3 font-playfair text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Every type of event, one standard&nbsp;—{" "}
              <span className="text-amber-600">premium</span>
            </h2>
          </div>
        </MotionWrap>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <MotionWrap key={event.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.08]">
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Floating enquire button (appears on hover, desktop) */}
                  <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <Link
                      href="/contact"
                      className="hidden rounded-full bg-white/95 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 md:inline-block"
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Title with amber accent bar */}
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-5 w-0.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-neutral-900 sm:text-xl">
                        {event.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-black/55">
                        {event.desc}
                      </p>
                    </div>
                  </div>

                  {/* Features — always visible */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {event.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium text-black/50 transition-colors group-hover:bg-amber-50 group-hover:text-amber-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Mobile enquire link (always visible) */}
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 md:hidden"
                  >
                    Enquire Now
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </MotionWrap>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS — Light warm strip
          ════════════════════════════════════════════════════════════ */}
      <section className="border-y border-black/[0.04] bg-stone-50/80">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <MotionWrap>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {[
                { number: "500+", label: "Events completed" },
                { number: "100%", label: "Client satisfaction" },
                { number: "24h", label: "Response time" },
                { number: "Perth", label: "Based & available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-playfair text-3xl font-medium text-neutral-900 sm:text-4xl md:text-5xl">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-black/35">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </MotionWrap>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PROCESS — Clean light layout, fixed PC text
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <MotionWrap>
            <div className="mb-14 max-w-xl">
              <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-amber-600">
                <span className="h-px w-6 bg-amber-500/50" />
                Process
              </p>
              <h2 className="mt-5 font-playfair text-3xl font-medium leading-snug text-neutral-900 sm:text-4xl">
                How every event comes together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-black/50">
                A simple, transparent process — from your first enquiry to the
                last track of the night.
              </p>
            </div>
          </MotionWrap>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Consultation",
                desc: "We discuss your vision, vibe, music preferences, and all event details over a call or in-person meeting.",
              },
              {
                number: "02",
                title: "Curation",
                desc: "A tailored playlist and timeline is crafted around your crowd, venue, and the energy you want.",
              },
              {
                number: "03",
                title: "Setup & Soundcheck",
                desc: "Professional equipment setup, full soundcheck, and coordination with your venue well before doors open.",
              },
              {
                number: "04",
                title: "Performance",
                desc: "Seamless live mixing, crowd reading, and energy control — creating an unforgettable experience.",
              },
            ].map((step, i) => (
              <MotionWrap key={step.number} delay={i * 0.1}>
                <div className="group rounded-2xl border border-black/[0.05] bg-stone-50/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/60 hover:shadow-lg hover:shadow-amber-500/[0.04] sm:p-7">
                  <span className="font-mono text-3xl font-extralight text-amber-500/50 transition-colors group-hover:text-amber-500">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-playfair text-lg font-medium text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/45">
                    {step.desc}
                  </p>
                </div>
              </MotionWrap>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TESTIMONIAL — Premium quote section
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-black/[0.04] bg-stone-50/60">

        <div className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8 md:py-28">
          <MotionWrap>
            <div className="text-center">
              {/* Large decorative quote marks */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-500" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
              </div>

              <blockquote>
                <p className="font-playfair text-xl font-light leading-relaxed text-neutral-800 sm:text-2xl md:text-3xl md:leading-relaxed">
                  DJ Bugati transformed our wedding reception. The music was
                  perfect, the transitions seamless, and our guests haven&apos;t
                  stopped talking about it.
                </p>
              </blockquote>

              <div className="mx-auto mt-8 h-px w-12 bg-amber-300" />

              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="block text-base font-semibold text-neutral-900">
                    Sarah &amp; Michael
                  </span>
                  <span className="mt-0.5 block text-sm text-black/40">
                    Wedding Reception — Perth, WA
                  </span>
                </cite>
              </footer>
            </div>
          </MotionWrap>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA — Light, elegant closing section
          ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-black/[0.04] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <MotionWrap>
              <p className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-amber-600">
                <span className="h-px w-6 bg-amber-500/50" />
                Let&apos;s Talk
                <span className="h-px w-6 bg-amber-500/50" />
              </p>

              <h2 className="mt-6 font-playfair text-3xl font-medium text-neutral-900 sm:text-4xl md:text-5xl">
                Ready to discuss your event?
              </h2>
              <p className="mt-4 text-base text-black/50 sm:text-lg">
                Send an enquiry and DJ Bugati will reply within 24&nbsp;hours.
              </p>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-neutral-900 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-neutral-800 hover:shadow-xl"
                >
                  Check Availability
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-widest text-black/25">
                <span>Professional Setup</span>
                <span className="hidden sm:inline">•</span>
                <span>Premium Sound</span>
                <span className="hidden sm:inline">•</span>
                <span>Licensed &amp; Insured</span>
              </div>
            </MotionWrap>
          </div>
        </div>
      </section>
    </div>
  );
}