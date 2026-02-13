import Link from "next/link";
import Image from "next/image";
import ImageBox from "@/components/ImageBox";
import MotionWrap from "@/components/MotionWrap";

export default function HomePage() {
  return (
    <div>
      <MotionWrap>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00000010,transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              Perth, Australia
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              DJ Bugati
              <span className="block text-black/60">
                Luxury sound. Clean energy.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-black/60 md:text-lg">
              Premium DJ services for weddings, birthdays, corporate events and
              private parties across Perth. Smooth mixing, professional setup,
              and music tailored to your crowd.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white hover:bg-black/90"
              >
                Book an Event
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border border-black/15 px-6 py-3 text-center text-sm font-medium text-black hover:bg-black/5"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <ImageBox
            label="Hero Image (DJ Bugati)"
            src="/images/bugati-3.jpg"
            className="aspect-[4/5] w-full md:aspect-[4/5]"
          />
        </div>
      </section>
      </MotionWrap>


      {/* About */}
      <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              About DJ Bugati
            </h2>
            <p className="mt-4 text-black/60">
              DJ Bugati is a Perth-based DJ known for clean transitions, premium
              sound, and reading the room perfectly. Whether it’s a wedding
              reception or a high-energy birthday celebration, every set is
              tailored to the event.
            </p>

            <div className="mt-6 space-y-3 text-sm text-black/60">
              <p>• Wedding receptions & afterparties</p>
              <p>• Corporate events & brand nights</p>
              <p>• Birthdays, private parties & club sets</p>
            </div>
          </div>

          <ImageBox label="About Image" className="aspect-[16/11] w-full"
          src="/images/bugati4.png" />
        </div>
      </section>
      </MotionWrap>

      {/* Events preview */}
      <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Events DJ Bugati Plays
            </h2>
            <p className="mt-3 max-w-2xl text-black/60">
              From luxury weddings to corporate functions — DJ Bugati delivers a
              premium atmosphere and a packed dancefloor.
            </p>
          </div>

          <Link
            href="/events"
            className="hidden text-sm font-medium text-black/70 hover:text-black md:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Weddings",
              desc: "Elegant music flow, perfect first dance moments, and a full dancefloor all night.",
              image: "/images/weddings.jpg",
            },
            {
              title: "Birthdays",
              desc: "High energy, crowd favourites, and a vibe tailored to your guests.",
              image: "/images/birthday.jpg",
            },
            {
              title: "Corporate Events",
              desc: "Professional setup, clean sound, and a premium atmosphere for your brand.",
              image: "/images/corporate.jpg",
            },
          ].map((e) => (
            <div
              key={e.title}
              className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-black/5">
                <Image
                  src={e.image}
                  alt={`${e.title} Image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-black/60">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </MotionWrap>

      {/* Testimonials */}
      <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Reviews from Clients
        </h2>
        <p className="mt-3 max-w-2xl text-black/60">
          Real feedback from weddings, birthdays, and corporate events in Perth.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Sarah M.",
              role: "Wedding Client",
              image: "/images/review-1.jpg",
              text: "DJ Bugati absolutely made our wedding reception. Perfect music, smooth transitions, and the dancefloor was full all night.",
              rating: 5,
            },
            {
              name: "Daniel K.",
              role: "Corporate Event",
              image: "/images/review-2.jpg",
              text: "Professional setup and great communication. Our corporate event felt premium and the vibe was exactly what we wanted.",
              rating: 5,
            },
            {
              name: "Joseph Crough",
              role: "Birthday Party",
              image: "/images/review-3.jpg",
              text: "Booked for a birthday and it was unreal. Everyone was dancing. Highly recommend if you want a proper party in Perth.",
              rating: 5,
            },
          ].map((r) => (
            <div
              key={r.name}
              className="group relative rounded-3xl border border-black/10 bg-gradient-to-br from-white to-black/[0.02] p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Quote icon */}
              <div className="absolute right-8 top-8 text-6xl leading-none text-black/5">
                "
              </div>
              
              {/* Star rating */}
              <div className="flex gap-1">
                {[...Array(r.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="relative z-10 mt-6 text-base leading-relaxed text-black/80">
                "{r.text}"
              </p>

              {/* Reviewer info */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-black/10 to-black/5 ring-2 ring-black/5">
                  <ImageBox
                    label={`${r.name} - Reviewer`}
                    src={r.image}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-black">{r.name}</p>
                  <p className="text-sm text-black/50">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </MotionWrap>

      {/* CTA */}
      <MotionWrap>
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-[2.5rem] border border-black/10 bg-black px-8 py-14 text-white md:px-14">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Book DJ Bugati for your event
          </h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Fill out the enquiry form and you’ll receive a response within 24
            hours.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
          >
            Book Now
          </Link>
        </div>
      </section>
        </MotionWrap>
    </div>
  );
}
