"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ContactForm from "../_components/ContactForm";

const PROJECTS = [
  {
    slug: "full-renovations",
    title: "Full Renovations",
    type: "Hardscape • Landscape • Lighting • Cabanas • Pool",
    summary: "A clean outdoor retreat with pavers, layered planting, and evening lighting built for entertaining.",
    image: "/images/projects/full-renovations/full_yard_day.png",
  },
  {
    slug: "pools",
    title: "Pools",
    type: "Custom Pool Design & Construction",
    summary: "Resort-style and geometric custom pools designed and built from the ground up for homeowners across the greater Los Angeles area.",
    image: "/images/projects/pools/kb-001.jpg",
  },
];

export default function OutdoorPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button type="button" onClick={() => router.back()} className="text-left">
            <div className="text-xl font-semibold tracking-[0.18em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="text-xs uppercase tracking-[0.28em] text-stone-500">Hardscape • Landscape • Pools</div>
          </button>
          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <a href="#services" className="transition hover:text-neutral-950">Services</a>
            <a href="#projects" className="transition hover:text-neutral-950">Projects</a>
            <a href="#process" className="transition hover:text-neutral-950">Process</a>
            <a href="#areas" className="transition hover:text-neutral-950">Areas</a>
            <a href="#contact" className="rounded-full border border-neutral-900 px-4 py-2 font-medium transition hover:bg-neutral-900 hover:text-stone-50">Get Estimate</a>
          </nav>
          <button type="button" onClick={() => setMenuOpen((v) => !v)} className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium md:hidden">Menu</button>
        </div>
        {menuOpen && (
          <div className="border-t border-stone-200 bg-stone-50 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm text-neutral-700">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
              <a href="#areas" onClick={() => setMenuOpen(false)}>Areas</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-neutral-950">Get Estimate</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/projects/full-renovations/full_yard_day.png')" }} />
          <div className="absolute inset-0 bg-neutral-900/50" />
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">Greater Los Angeles Area</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">Design It. Build It. Love It.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Peachy Builders specializes in custom pools, hardscape, and full outdoor transformations for homeowners across the greater Los Angeles area.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-px">View Our Work</a>
              <a href="#contact" className="rounded-full border border-white/50 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">Request Free Estimate</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Licensed & Insured", "25+ Years Experience", "Free Estimates", "Design-Driven"].map((tag) => (
                <div key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">{tag}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Services</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">What We Do</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Custom Pools", desc: "Resort-style and geometric pool builds designed from the ground up — shapes, water features, and finishes tailored to your property." },
                { title: "Hardscape", desc: "Custom patios, pavers, walkways, and retaining walls built for beauty and long-term durability." },
                { title: "Landscape Design", desc: "Thoughtful planting, lighting, and softscape design that adds balance and curb appeal to every property." },
                { title: "Outdoor Living", desc: "Cabanas, pergolas, fire features, and outdoor kitchens — full exterior spaces built for year-round entertaining." },
                { title: "Exterior Design", desc: "Full outdoor transformations that unify architecture, materials, and lifestyle into one cohesive result." },
              ].map((svc) => (
                <div key={svc.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
                  <h3 className="text-2xl font-semibold">{svc.title}</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{svc.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Custom Pool Builds", "Backyard Transformations", "Patios & Walkways", "Pavers & Driveways", "Retaining Walls", "Outdoor Living Spaces", "Concrete & Flatwork", "Turf & Low-Maintenance Yards", "Landscape Lighting", "Water Features", "Fire Features", "Cabanas & Pergolas"].map((tag) => (
                <div key={tag} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-neutral-700">{tag}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Featured Work</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Recent Projects</h2>
              </div>
              <a href="#contact" className="hidden text-sm font-medium underline underline-offset-4 md:block">Start Your Project →</a>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {PROJECTS.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`} className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${proj.image}')` }}>
                    <div className="absolute inset-0 bg-neutral-900/0 transition-all duration-300 group-hover:bg-neutral-900/25" />
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-neutral-900 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      View Photos
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold transition duration-200 group-hover:text-neutral-500">{proj.title}</h3>
                    <div className="mt-1 text-sm text-stone-500">{proj.type}</div>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{proj.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-400">How It Works</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">From Estimate to Finished Project</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { step: "01", title: "Consultation", desc: "We walk the property, understand your goals, and discuss style, function, and budget." },
                { step: "02", title: "Design & Planning", desc: "We shape the layout, materials, and direction so every decision feels intentional." },
                { step: "03", title: "Build & Execution", desc: "Our team brings the plan to life with quality workmanship and clear communication." },
                { step: "04", title: "Final Walkthrough", desc: "We review everything together to make sure the result meets the standard your home deserves." },
              ].map((s) => (
                <div key={s.step} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7">
                  <div className="text-sm font-medium tracking-[0.22em] text-stone-400">{s.step}</div>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-stone-100 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-stone-200 bg-white p-8">
              <div><div className="text-sm uppercase tracking-[0.24em] text-stone-400">License</div><div className="mt-1 text-xl font-semibold">License #1058911</div></div>
              <div><div className="text-sm uppercase tracking-[0.24em] text-stone-400">Coverage</div><div className="mt-1 text-xl font-semibold">Fully Insured</div></div>
              <div><div className="text-sm uppercase tracking-[0.24em] text-stone-400">Experience</div><div className="mt-1 text-xl font-semibold">25+ Years</div></div>
              <div><div className="text-sm uppercase tracking-[0.24em] text-stone-400">Estimates</div><div className="mt-1 text-xl font-semibold">Always Free</div></div>
              <a href="#contact" className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:opacity-90">Get Estimate</a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section id="areas" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Service Areas</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">We Serve the Greater LA Area</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-600">Based in Agoura Hills, Peachy Builders works throughout the western San Fernando Valley and surrounding communities.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Agoura Hills", "Calabasas", "Westlake Village", "Woodland Hills", "Encino", "Tarzana", "Thousand Oaks", "Surrounding LA Areas"].map((area) => (
                  <div key={area} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm font-medium text-neutral-700">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-neutral-900 text-stone-50 shadow-2xl">
            <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-14">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Contact</div>
                <h2 className="mt-3 text-4xl font-semibold">Ready to Get Started?</h2>
                <p className="mt-4 text-lg leading-8 text-stone-300">Whether it&apos;s a custom pool, patio, retaining wall, or full backyard — reach out and we&apos;ll walk you through next steps.</p>
                <div className="mt-8 space-y-3 text-stone-300">
                  <div>📞 323-477-4733</div>
                  <div>✉️ Peachybuilders@gmail.com</div>
                  <div>📍 28047 Dorothy Dr, Agoura Hills, CA</div>
                  <div>🕐 Mon–Fri, 9am – 5pm</div>
                </div>
              </div>
              <ContactForm source="outdoor" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-semibold tracking-[0.16em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="mt-1">Hardscape • Landscape • Pools — Agoura Hills, CA</div>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#projects" className="hover:text-neutral-900">Projects</a>
            <a href="#areas" className="hover:text-neutral-900">Areas</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
