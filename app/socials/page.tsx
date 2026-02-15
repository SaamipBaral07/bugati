import type { Metadata } from "next";
import { FadeUp } from "@/components/Motion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Socials | DJ Bugati",
  description:
    "Watch DJ Bugati's latest videos and explore Instagram reels, photos and mixes.",
};

const YOUTUBE_VIDEOS = [
  {
    title: "Latest DJ Bugati Video #1",
    url: "https://www.youtube.com/watch?v=9mLr7O5yTIo",
    embed: "https://www.youtube.com/embed/9mLr7O5yTIo",
  },
  {
    title: "Latest DJ Bugati Video #2",
    url: "https://www.youtube.com/watch?v=EXcI4GyxMPg",
    embed: "https://www.youtube.com/embed/EXcI4GyxMPg",
  },
];

const IG_POSTS = [

  "https://www.instagram.com/p/DTTFoTFkgIo/",
  "https://www.instagram.com/p/DRdXJsCkhqO/",
  "https://www.instagram.com/p/DSKOsgdkjo8/",
  "https://www.instagram.com/p/DRjKAtkEtte/",
  "https://www.instagram.com/p/DN9zpDTEj_F/",
  "https://www.instagram.com/p/DRwxd9xknWs/",
];

export default function SocialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:py-20">
      {/* Hero Section - Enhanced */}
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-xl sm:p-10 md:rounded-[2.5rem] md:p-16">
          {/* Enhanced gradient background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-rose-50/30" />
          
          {/* Decorative blur elements */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-rose-400/10 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/80 px-4 py-1.5 backdrop-blur-sm">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-600" />
              <p className="text-xs font-semibold tracking-[0.3em] text-amber-800">
                SOCIAL MEDIA
              </p>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-black sm:mt-6 sm:text-5xl md:text-7xl">
              DJ Bugati Online
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 sm:mt-6 sm:text-lg md:text-xl">
              Explore DJ Bugati's latest performances, reels, highlights and
              mixes — updated directly on Instagram and YouTube.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a
                href="https://www.instagram.com/dj.bugati/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40 sm:px-8 sm:py-4"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </span>
              </a>

              <a
                href="https://www.youtube.com/@djbugati-yr8th"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 sm:px-8 sm:py-4"
              >
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </span>
              </a>

              <a
                href="https://www.tiktok.com/@dj.bugati"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-black bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white sm:px-8 sm:py-4"
              >
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.74 2.89 2.89 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
                  </svg>
                  TikTok
                </span>
              </a>

              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-600/50 sm:px-8 sm:py-4"
              >
                Book DJ Bugati
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Social Platform Cards - Enhanced */}
      <FadeUp delay={0.1}>
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          <SocialCard
            title="Instagram"
            desc="Reels, photos, event highlights and behind-the-scenes."
            link="https://www.instagram.com/dj.bugati/"
            cta="Follow @dj.bugati"
            icon="instagram"
            gradient="from-purple-500 via-pink-500 to-orange-500"
          />
          <SocialCard
            title="YouTube"
            desc="Latest DJ videos, performances and live sets."
            link="https://www.youtube.com/@djbugati-yr8th"
            cta="Visit Channel"
            icon="youtube"
            gradient="from-red-500 to-red-600"
          />
          <SocialCard
            title="TikTok"
            desc="Short-form videos, dance covers, and live performances."
            link="https://www.tiktok.com/@dj.bugati"
            cta="Follow on TikTok"
            icon="tiktok"
            gradient="from-black to-gray-800"
          />
        </div>
      </FadeUp>

      {/* YouTube Section - Enhanced */}
      <FadeUp delay={0.15}>
        <section className="mt-14 sm:mt-20">
          <div className="mb-6 flex flex-col gap-3 sm:mb-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-4 py-1.5">
              <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <p className="text-xs font-semibold tracking-wider text-red-700">
                YOUTUBE
              </p>
            </div>
            
            <h2 className="font-serif text-3xl font-bold text-black sm:text-4xl md:text-5xl">
              Latest Videos
            </h2>
            <p className="max-w-2xl text-base text-black/60 sm:text-lg">
              Watch the newest uploads from DJ Bugati's channel.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-8 md:grid-cols-2">
            {YOUTUBE_VIDEOS.map((v, idx) => (
              <div
                key={v.embed}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg transition-all duration-300 sm:rounded-3xl md:hover:scale-[1.02] md:hover:shadow-2xl"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    className="h-full w-full"
                    src={v.embed}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                    Video #{idx + 1}
                  </div>
                  
                  <p className="text-base font-semibold text-black">
                    {v.title}
                  </p>

                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                  >
                    Watch on YouTube
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* Instagram Section - Enhanced with Better Styling */}
      <FadeUp delay={0.2}>
        <section className="mt-14 sm:mt-24">
          <div className="mb-6 flex flex-col gap-3 sm:mb-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 px-4 py-1.5">
              <svg className="h-4 w-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <p className="text-xs font-semibold tracking-wider text-pink-700">
                INSTAGRAM
              </p>
            </div>
            
            <h2 className="font-serif text-3xl font-bold text-black sm:text-4xl md:text-5xl">
              Featured Posts
            </h2>
            <p className="max-w-2xl text-base text-black/60 sm:text-lg">
              A selection of recent highlights from @dj.bugati. Follow for the latest reels, photos, and event coverage.
            </p>
          </div>

          {/* Mobile: Show first 3 posts only (1 column, clean cards) */}
          <div className="grid gap-3 sm:grid-cols-2 md:hidden">
            {IG_POSTS.slice(0, 3).map((url, idx) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-black">Post #{idx + 1}</p>
                  <p className="text-xs text-black/50">View on Instagram</p>
                </div>
                <svg className="h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Desktop: Full iframe embeds */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {IG_POSTS.map((url, idx) => (
              <div
                key={url}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-2 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 overflow-hidden rounded-[1.375rem] bg-white">
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    <iframe
                      className="h-full w-full"
                      src={`${url}embed`}
                      title={`Instagram post ${idx + 1}`}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <a
              href="https://www.instagram.com/dj.bugati/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/50 sm:px-8 sm:py-4 sm:text-base"
            >
              View More on Instagram
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </FadeUp>

      {/* SoundCloud Section - Simplified */}
      <FadeUp delay={0.25}>
        <section className="mt-14 sm:mt-24">
          <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-orange-50 to-white p-6 shadow-xl sm:rounded-3xl sm:p-10 md:p-14">
            <div className="flex flex-col gap-3">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5">
                <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.05 0-.09.04-.099.098l-.157 1.328.157 1.31c0 .057.045.1.09.1.05 0 .09-.04.099-.098l.176-1.31-.176-1.328c0-.057-.045-.1-.09-.1m1.8-.456c-.059 0-.113.053-.12.116l-.21 1.784.21 1.746c.007.067.061.115.12.115.058 0 .112-.048.121-.115l.23-1.746-.23-1.784c-.009-.063-.063-.116-.121-.116m.899-.583c-.068 0-.127.06-.135.132l-.186 2.367.186 2.302c.008.075.067.132.135.132.067 0 .124-.057.133-.132l.208-2.302-.208-2.367c-.009-.072-.066-.132-.133-.132m.9-.735c-.077 0-.138.066-.145.143l-.163 3.102.163 3.044c.007.077.068.143.145.143.076 0 .137-.066.145-.143l.18-3.044-.18-3.102c-.008-.077-.069-.143-.145-.143m.899-.987c-.085 0-.153.073-.16.159l-.142 4.09.142 3.988c.007.086.075.158.16.158.084 0 .152-.072.159-.158l.157-3.988-.157-4.09c-.007-.086-.075-.159-.159-.159m.9-1.037c-.093 0-.168.08-.176.174l-.124 5.127.124 5.01c.008.094.083.173.176.173.092 0 .167-.079.176-.173l.137-5.01-.137-5.127c-.009-.094-.084-.174-.176-.174m.899-.17c-.101 0-.184.087-.192.19l-.106 5.297.106 5.173c.008.103.091.189.192.189.1 0 .183-.086.192-.189l.117-5.173-.117-5.297c-.009-.103-.092-.19-.192-.19m.9.192c-.11 0-.198.093-.206.203l-.089 5.105.089 5.024c.008.11.096.202.206.202.109 0 .197-.092.206-.202l.098-5.024-.098-5.105c-.009-.11-.097-.203-.206-.203m.899.456c-.118 0-.212.1-.221.22l-.071 4.649.071 4.586c.009.118.103.218.221.218.117 0 .21-.1.22-.218l.078-4.586-.078-4.649c-.01-.12-.103-.22-.22-.22m.9.624c-.126 0-.227.106-.236.233l-.053 4.025.053 3.952c.009.126.11.232.236.232.125 0 .226-.106.235-.232l.059-3.952-.059-4.025c-.009-.127-.11-.233-.235-.233m.899.718c-.134 0-.241.113-.25.249l-.035 3.307.035 3.252c.009.136.116.248.25.248.133 0 .24-.112.249-.248l.039-3.252-.039-3.307c-.009-.136-.116-.249-.249-.249m.9.862c-.142 0-.256.119-.265.262l-.016 2.445.016 2.411c.009.142.123.261.265.261.141 0 .255-.119.264-.261l.018-2.411-.018-2.445c-.009-.143-.123-.262-.264-.262m.899.997c-.151 0-.271.126-.28.278l.28 1.448-.28 1.428c.009.151.129.277.28.277.15 0 .27-.126.279-.277l.295-1.428-.295-1.448c-.009-.152-.129-.278-.279-.278m.9 1.211c-.159 0-.285.133-.294.291l-.261.237.261.247c.009.158.135.29.294.29.158 0 .284-.132.293-.29l.273-.247-.273-.237c-.009-.158-.135-.291-.293-.291m7.582 1.677l-.371-5.432c-.008-.104-.103-.183-.209-.183-.105 0-.192.079-.2.183l-.328 5.432.328 5.33c.008.104.095.183.2.183.106 0 .201-.079.209-.183l.371-5.33m-.899-6.711c-.084 0-.154.073-.162.158l-.352 6.553.352 6.4c.008.085.078.158.162.158s.153-.073.161-.158l.391-6.4-.391-6.553c-.008-.085-.077-.158-.161-.158m-.9-1.033c-.067 0-.122.06-.13.132l-.333 7.586.333 7.418c.008.072.063.131.13.131.066 0 .121-.059.129-.131l.352-7.418-.352-7.586c-.008-.072-.063-.132-.129-.132m-.899-1.291c-.051 0-.094.046-.102.1l-.314 8.877.314 8.673c.008.057.051.099.102.099.05 0 .092-.042.1-.099l.333-8.673-.333-8.877c-.008-.057-.05-.1-.1-.1m-.9-1.482c-.034 0-.063.03-.071.066l-.295 10.359.295 10.126c.008.036.037.065.071.065.033 0 .062-.029.07-.065l.313-10.126-.313-10.359c-.008-.036-.037-.066-.07-.066m-.899-1.67c-.017 0-.032.015-.04.033l-.276 12.029.276 11.789c.008.018.023.032.04.032.016 0 .031-.014.039-.032l.294-11.789-.294-12.029c-.008-.018-.023-.033-.039-.033"/>
                </svg>
                <p className="text-xs font-semibold tracking-wider text-orange-700">
                  SOUNDCLOUD
                </p>
              </div>
              
              <h2 className="font-serif text-3xl font-bold text-black sm:text-4xl md:text-5xl">
                Audio & Mixes
              </h2>
              
              <p className="mt-2 max-w-2xl text-base text-black/60 sm:text-lg">
                Follow DJ Bugati on SoundCloud for upcoming releases, exclusive mixes, and audio content.
              </p>

              <a
                href="https://soundcloud.com/dj-bugati-573058270"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-600/30 transition-all duration-300 hover:scale-105 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/50 sm:px-8 sm:py-4 sm:text-base"
              >
                Visit SoundCloud Profile
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </FadeUp>
    </div>
  );
}

/* Enhanced Social Card Component */
function SocialCard({
  title,
  desc,
  link,
  cta,
  icon,
  gradient,
}: {
  title: string;
  desc: string;
  link: string;
  cta: string;
  icon: "instagram" | "youtube" | "tiktok";
  gradient: string;
}) {
  const IconComponent = () => {
    switch (icon) {
      case "instagram":
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case "youtube":
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case "tiktok":
        return (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.74 2.89 2.89 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
          </svg>
        );
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-lg transition-all duration-300 sm:rounded-3xl sm:p-8 md:hover:scale-[1.02] md:hover:shadow-2xl">
      {/* Subtle gradient background */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
      
      <div className="relative">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl`}>
          <IconComponent />
        </div>

        <h3 className="mt-4 font-serif text-xl font-bold text-black sm:mt-5 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-black/60 sm:mt-3">
          {desc}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:mt-6 sm:px-6 sm:py-3`}
        >
          {cta}
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}