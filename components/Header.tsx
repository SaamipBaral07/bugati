"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Socials", href: "/socials" },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Keep header visible when mobile menu is open
      if (open) {
        setIsVisible(true);
        setLastScrollY(window.scrollY);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, open]);

  // Active route checker (supports nested routes)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 px-4 py-3 transition-all duration-300 ease-in-out md:py-5 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-amber-100/20 bg-white/95 px-4 py-5 shadow-xl shadow-black/5 backdrop-blur-md md:rounded-full md:px-8 md:py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-20 blur-md transition-opacity group-hover:opacity-40"></div>
            <Image
              src="/images/logo.png"
              alt="DJ Bugati"
              width={64}
              height={64}
              className="relative rounded-full border-2 border-amber-200/60 shadow-lg transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wide text-gray-900 md:text-2xl">
              DJ Bugati
            </span>
            <span className="text-[10px] font-light tracking-widest text-amber-600 md:text-xs">
              Feel the Beat
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {navLinks.map((l) => {
            const active = isActive(l.href);

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative transition-colors ${
                  active ? "text-amber-700" : "hover:text-amber-700"
                }`}
              >
                {l.name}

                {/* Active underline */}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-700" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/book"
            className="rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-amber-600/20 transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="rounded-xl border border-amber-200 bg-white p-2 text-amber-700 shadow-sm transition-all hover:bg-amber-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="mt-2 rounded-2xl border border-amber-100/20 bg-white/95 shadow-xl backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-5">
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
              {navLinks.map((l) => {
                const active = isActive(l.href);

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 transition-all ${
                      active
                        ? "bg-amber-50 text-amber-800 ring-1 ring-amber-200"
                        : "hover:bg-amber-50 hover:text-amber-700"
                    }`}
                  >
                    {l.name}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-6 inline-block w-full rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3 text-center text-sm font-medium text-white shadow-md shadow-amber-600/20 hover:shadow-lg hover:shadow-amber-600/30"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
