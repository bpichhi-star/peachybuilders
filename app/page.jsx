"use client";
import { useState } from "react";

export default function PeachyBuildersSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { title: "Hardscape", desc: "Custom patios, pavers, walkways, and retaining walls built for beauty and long-term durability." },
    { title: "Landscape Design", desc: "Thoughtful planting, lighting, and softscape design that adds balance and curb appeal to every property." },
    { title: "Exterior Design", desc: "Full outdoor transformations that unify architecture, materials, and lifestyle into one cohesive result." },
  ];

  const specialties = [
    "Backyard Transformations","Patios & Walkways","Pavers & Driveways","Retaining Walls",
    "Outdoor Living Spaces","Concrete & Flatwork","Turf & Low-Maintenance Yards","Landscape Lighting",
  ];

  const projects = [
    { title: "Modern Backyard Upgrade", place: "Agoura Hills, CA", type: "Hardscape • Landscape • Lighting", summary: "A clean outdoor retreat with pavers, layered planting, and evening lighting built for entertaining.", img: "/images/hero-night.jpg" },
    { title: "Curb Appeal Refresh", place: "Calabasas, CA", type: "Driveway • Entry • Exterior Design", summary: "A front-of-home redesign focused on texture, symmetry, and a more elevated first impression.", img: "/images/hero-day.jpg" },
    { title: "Outdoor Living Expansion", place: "Westlake Village, CA", type: "Patio • Seating Area • Hardscape", summary: "An underused backyard transformed into a refined, functional extension of the home.", gradient: "bg-[linear-gradient(135deg,#f5f5f4,#d6d3d1,#78716c)]" },
  ];

  const process = [
    { step: "01", title: "Consultation", desc: "We walk the property, understand your goals, and discuss style, function, and budget." },
    { step: "02", title: "Design & Planning", desc: "We shape the layout, materials, and direction so every decision feels intentional." },
    { step: "03", title: "Build & Execution", desc: "Our team brings the plan to life with quality workmanship and clear communication." },
    { step: "04", title: "Final Walkthrough", desc: "We review everything together to make sure the result meets the standard your home deserves." },
  ];

  const serviceAreas = [
    "Agoura Hills","Calabasas","Westlake Village","Woodland Hills",
    "Encino","Tarzana","Thousand Oaks","Surrounding LA Areas",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-[0.18em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="text-xs uppercase tracking-[0.28em] text-stone-500">Outdoor Design • Hardscape • Landscape</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <a href="#services" className="transition hover:text-neutral-950">Services</a>
            <a href="#projects" className="transition hover:text-neutral-950">Projects</a>
            <a href="#process" className="transition hover:text-neutral-950">Process</a>
            <a href="#areas" className="transition hover:text-neutral-950">Areas</a>
            <a href="#contact" className="rounded-full border border-neutral-900 px-4 py-2 font-medium transition hover:bg-neutral-900 hover:text-stone-50">Get Estimate</a>
          </nav>
          <button type="button" onClick={() => setMobileMenuOpen((o) => !o)}
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium md:hidden">
            Menu
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-stone-200 bg-stone-50 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4 text-sm text-neutral-700">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#areas" onClick={() => setMobileMenuOpen(false)}>Areas</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-neutral-950">Get Estimate</a>
            </nav>
          </div>
        )}
      </header>

      <main>

        {/* HERO — full bleed photo */}
        <section className="relative min-h-[90vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-night.jpg" alt="Peachy Builders outdoor project" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
          </div>
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
            <div className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Agoura Hills & Surrounding Areas
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Design It. Build It. Love It.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-stone-200">
              Peachy Builders designs and builds patios, pavers, retaining walls, and full exterior transformations for homeowners across the greater Los Angeles area.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-px">
                View Our Work
              </a>
              <a href="#contact" className="rounded-full border border-white/50 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                Request Free Estimate
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Licensed & Insured","25+ Years Experience","Free Estimates","Design-Driven"].map((item) => (
                <div key={item} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Services</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">What We Do</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {specialties.map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Featured Work</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Recent Projects</h2>
              </div>
              <a href="#contact" className="hidden text-sm font-medium underline underline-offset-4 md:block">
                Start Your Project →
              </a>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((p) => (
                <div key={p.title} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
                  {p.img ? (
                    <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
                  ) : (
                    <div className={`h-56 ${p.gradient}`} />
                  )}
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-[0.22em] text-stone-400">{p.place}</div>
                    <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                    <div className="mt-1 text-sm text-stone-500">{p.type}</div>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{p.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-400">How It Works</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">From Estimate to Finished Project</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7">
                  <div className="text-sm font-medium tracking-[0.22em] text-stone-400">{item.step}</div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
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

        {/* SERVICE AREAS */}
        <section id="areas" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Service Areas</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">We Serve the Greater LA Area</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-600">Based in Agoura Hills, Peachy Builders works throughout the western San Fernando Valley and surrounding communities.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm font-medium text-neutral-700">{area}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] bg-neutral-900 text-stone-50 shadow-2xl">
            <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-14">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Contact</div>
                <h2 className="mt-3 text-4xl font-semibold">Ready to Get Started?</h2>
                <p className="mt-4 text-lg leading-8 text-stone-300">Whether it's a patio, driveway, retaining wall, or full backyard — reach out and we'll walk you through next steps.</p>
                <div className="mt-8 space-y-3 text-stone-300">
                  <div>📞 323-477-4733</div>
                  <div>✉️ Peachybuilders@gmail.com</div>
                  <div>📍 28047 Dorothy Dr, Agoura Hills, CA</div>
                  <div>🕐 Mon–Fri, 9am – 5pm</div>
                </div>
              </div>
              <div className="rounded-[2rem] bg-white p-7 text-neutral-900">
                <h3 className="text-xl font-semibold">Request a Free Estimate</h3>
                <p className="mt-2 text-sm text-neutral-500">Tell us about your project and we'll be in touch shortly.</p>
                <form className="mt-6 space-y-4">
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Full name" name="name" autoComplete="name" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Email address" name="email" type="email" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Phone number" name="phone" type="tel" />
                  <textarea className="h-28 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Tell us about your project" name="message" />
                  <button type="submit" className="w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-stone-50 transition hover:opacity-90">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-semibold tracking-[0.16em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="mt-1">Hardscape, Landscape & Exterior Design — Agoura Hills, CA</div>
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