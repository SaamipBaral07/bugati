import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-gradient-to-b from-white to-black/[0.015]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">DJ Bugati</p>
            <p className="mt-2 text-sm leading-relaxed text-black/50">
              Perth-based DJ for weddings, birthdays, corporate events and
              private parties.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-black/50">
              <Link href="/events" className="transition-colors duration-200 hover:text-black">
                Events
              </Link>
              <Link href="/gallery" className="transition-colors duration-200 hover:text-black">
                Gallery
              </Link>
              <Link href="/book" className="transition-colors duration-200 hover:text-black">
                Book Event
              </Link>
              <Link href="/contact" className="transition-colors duration-200 hover:text-black">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Location</p>
            <p className="mt-3 text-sm leading-relaxed text-black/50">
              Perth, Australia
              <br />
              Available across WA
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-black/8 pt-6 text-center text-sm text-black/40">
          © {new Date().getFullYear()} DJ Bugati. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
