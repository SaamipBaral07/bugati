import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Music, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Top: Brand + Nav */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="DJ Bugati"
                width={56}
                height={56}
                className="rounded-full border-2 border-amber-200/60 shadow-lg"
              />
              <div>
                <p className="font-serif text-2xl font-bold tracking-wide text-gray-900">
                  DJ Bugati
                </p>
                <p className="text-xs font-light tracking-widest text-amber-600">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4405F] text-[#E4405F] transition-all hover:bg-[#E4405F] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/@djbugati-yr8th"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FF0000] text-[#FF0000] transition-all hover:bg-[#FF0000] hover:text-white"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://soundcloud.com/dj-bugati-573058270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FF9500] text-[#FF9500] transition-all hover:bg-[#FF9500] hover:text-white"
                aria-label="SoundCloud"
              >
                <Music size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@dj.bugati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#000000] text-[#000000] transition-all hover:bg-[#000000] hover:text-white"
                aria-label="TikTok"
              >
                <Music2 size={16} />
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
