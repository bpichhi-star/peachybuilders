"use client";
import { useState } from "react";
import Link from "next/link";

export default function Welcome() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white overflow-hidden">

      {/* ── Wordmark overlay ─────────────────────────────────── */}
      <div className="absolute inset-x-0 top-0 z-20 flex flex-col items-center pt-10 pb-8 pointer-events-none select-none">
        <p className="text-[20px] uppercase tracking-[0.5em] text-neutral-400 mb-3">
          Welcome&nbsp;To
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.15em] text-white uppercase leading-none">
          Peachy&nbsp;Builders
        </h1>
      </div>

      {/* ── Split Cards ───────────────────────────────────────── */}
      <div className="flex w-full min-h-screen flex-col md:flex-row">

        {/* Card 1 – Kitchen & Bath */}
        <Link
          href="/kitchens-baths"
          onMouseEnter={() => setHovered("kb")}
          onMouseLeave={() => setHovered(null)}
          className="group relative flex flex-1 flex-col items-center justify-start overflow-hidden cursor-pointer"
          style={{ minHeight: "50vh" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-100 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/projects/kitchens/kb-10.jpg')" }}
          />
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background:
                hovered === "kb"
                  ? "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55))"
                  : "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))",
            }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 hidden md:block z-10" />
          <div
            className="relative z-10 flex flex-col items-center gap-5 px-8 text-center"
            style={{ marginTop: "38vh" }}
          >
            <div className="text-base uppercase tracking-[0.3em] text-white/50">Interior Remodels</div>
            <h2 className="text-3xl font-semibold tracking-tight text-white leading-tight whitespace-nowrap">
              Kitchen &amp; Bath
            </h2>
            <p className="max-w-xs text-sm leading-7 text-white/65">
              Premium kitchen and bathroom transformations built around clean design and quality materials.
            </p>
            <div className="mt-2 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white">
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Card 2 – Hardscape, Landscape, Pools */}
        <Link
          href="/outdoor"
          onMouseEnter={() => setHovered("outdoor")}
          onMouseLeave={() => setHovered(null)}
          className="group relative flex flex-1 flex-col items-center justify-start overflow-hidden cursor-pointer"
          style={{ minHeight: "50vh" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-100 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/projects/full-renovations/full_yard_day.png')" }}
          />
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              background:
                hovered === "outdoor"
                  ? "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55))"
                  : "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))",
            }}
          />
          <div
            className="relative z-10 flex flex-col items-center gap-5 px-8 text-center"
            style={{ marginTop: "38vh" }}
          >
            <div className="text-base uppercase tracking-[0.3em] text-white/50">Outdoor Living</div>
            <h2 className="text-3xl font-semibold tracking-tight text-white leading-tight whitespace-nowrap">
              Hardscape, Landscape &amp; Pools
            </h2>
            <p className="max-w-xs text-sm leading-7 text-white/65">
              Custom pools, patios, pavers, full outdoor transformations across the Los Angeles area.
            </p>
            <div className="mt-2 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white">
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </Link>

      </div>

      {/* ── Footer line ───────────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs tracking-[0.25em] uppercase text-neutral-400 whitespace-nowrap">
        Agoura Hills, CA &nbsp;&middot;&nbsp; License #1058911
      </div>

    </div>
  );
}
