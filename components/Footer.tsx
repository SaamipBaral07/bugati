import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Top: Brand + Nav */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-200 bg-gradient-to-br from-amber-50 to-white shadow-sm">
                <span className="text-xl font-bold text-amber-600">DB</span>
              </div>
              <div>
                <p className="font-serif text-xl font-bold tracking-wide text-gray-900">
                  DJ Bugati
                </p>
                <p className="text-[10px] font-light tracking-widest text-amber-600">
                  Feel the Beat
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/50">
              Premium DJ services for weddings, birthdays, corporate events and
              private parties across Perth, Western Australia.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/dj.bugati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/40 transition-all hover:border-amber-300 hover:text-amber-600"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@djbugati-yr8th"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/40 transition-all hover:border-red-300 hover:text-red-600"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://soundcloud.com/dj-bugati-573058270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/40 transition-all hover:border-orange-300 hover:text-orange-600"
                aria-label="SoundCloud"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.56 8.87V17h8.76c1.85-.01 2.68-1.4 2.68-2.75 0-1.36-.84-2.76-2.68-2.76-.47 0-.9.1-1.27.27-.1-2.33-2.02-4.2-4.39-4.2-1.2 0-2.28.47-3.1 1.31zm-1.23-.5V17h.5V8.18c-.17.05-.34.11-.5.19zm-.78.57V17h.5V8.53c-.18.12-.35.26-.5.41zm-.78 1.06V17h.5V9.73c-.18.19-.35.39-.5.61zm-.78 1.51V17h.5v-5.15c-.18.25-.36.57-.5.95zm-.78 1.64V17h.5v-3.71c-.11.23-.24.53-.37.88l-.13.37zm-.78 1.43V17h.5v-2.43c-.04.1-.09.22-.15.37-.11.27-.24.6-.35.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-black/30">
                Pages
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-black/50">
                <Link href="/" className="transition-colors duration-200 hover:text-black">
                  Home
                </Link>
                <Link href="/events" className="transition-colors duration-200 hover:text-black">
                  Events
                </Link>
                <Link href="/gallery" className="transition-colors duration-200 hover:text-black">
                  Gallery
                </Link>
                <Link href="/socials" className="transition-colors duration-200 hover:text-black">
                  Socials
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-black/30">
                Services
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-black/50">
                <Link href="/events" className="transition-colors duration-200 hover:text-black">
                  Weddings
                </Link>
                <Link href="/events" className="transition-colors duration-200 hover:text-black">
                  Birthdays
                </Link>
                <Link href="/events" className="transition-colors duration-200 hover:text-black">
                  Corporate
                </Link>
                <Link href="/events" className="transition-colors duration-200 hover:text-black">
                  Private Parties
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-black/30">
                Contact
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-black/50">
                <Link href="/contact" className="transition-colors duration-200 hover:text-black">
                  Book Event
                </Link>
                <a href="mailto:djbugati@gmail.com" className="transition-colors duration-200 hover:text-black">
                  djbugati@gmail.com
                </a>
                <p>Perth, Australia</p>
                <p>Available across WA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/8 pt-6 text-sm text-black/35 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} DJ Bugati. All rights reserved.</p>
          <p className="text-xs tracking-wide">Perth, Western Australia</p>
        </div>
      </div>
    </footer>
  );
}
