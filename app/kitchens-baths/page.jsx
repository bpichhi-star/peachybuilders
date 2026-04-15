"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GALLERIES = [
  {
    slug: "kitchens",
    title: "Kitchens",
    type: "Kitchen Remodels",
    summary: "Full kitchen transformations from layout and cabinetry to countertops, backsplash, and fixtures — built to impress and function beautifully.",
    image: "/images/projects/kitchens-baths/kb-10.jpg",
  },
  {
    slug: "bathrooms",
    title: "Bathrooms",
    type: "Bathroom Remodels",
    summary: "Spa-inspired bathroom renovations featuring custom tile work, premium fixtures, vanities, and thoughtful layouts.",
    image: "/images/projects/kitchens-baths/kb-9.jpg",
  },
];

export default function KitchensBathsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button type="button" onClick={() => router.back()} className="text-left">
            <div className="text-xl font-semibold tracking-[0.18em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="text-xs uppercase tracking-[0.28em] text-stone-500">Kitchens & Bathrooms</div>
          </button>
          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <a href="#services" className="transition hover:text-neutral-950">Services</a>
            <a href="#gallery" className="transition hover:text-neutral-950">Gallery</a>
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
              <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
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
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/projects/kitchens-baths/kb-9.jpg')" }} />
          <div className="absolute inset-0 bg-neutral-900/50" />
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-40">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">Greater Los Angeles Area</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">Kitchens &amp; Bathrooms</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              Premium interior remodels designed for how you live. From full kitchen overhauls to spa-inspired bathrooms, every project is built with quality materials and precision craftsmanship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#gallery" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-px">View Our Work</a>
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
                { title: "Kitchen Remodels", desc: "Full kitchen transformations from layout and cabinetry to countertops, backsplash, and fixtures — built to impress and function beautifully." },
                { title: "Bathroom Remodels", desc: "Spa-inspired bathroom renovations featuring custom tile work, premium fixtures, vanities, and thoughtful layouts." },
                { title: "Custom Cabinetry", desc: "Built-to-order cabinetry designed to maximize your space and match your aesthetic — kitchens, bathrooms, and beyond." },
              ].map((svc) => (
                <div key={svc.title} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
                  <h3 className="text-2xl font-semibold">{svc.title}</h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600">{svc.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Kitchen Remodels", "Bathroom Remodels", "Custom Cabinetry", "Countertops & Surfaces", "Tile & Backsplash", "Fixture Upgrades", "Spa Bathrooms", "Open Concept Layouts"].map((tag) => (
                <div key={tag} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-neutral-700">{tag}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Our Work</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Kitchen &amp; Bath Gallery</h2>
              </div>
              <a href="#contact" className="hidden text-sm font-medium underline underline-offset-4 md:block">Start Your Project →</a>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {GALLERIES.map((g) => (
                <Link key={g.slug} href={`/projects/${g.slug}`} className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl block">
                  <div className="relative h-64 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${g.image}')` }}>
                    <div className="absolute inset-0 bg-neutral-900/0 transition-all duration-300 group-hover:bg-neutral-900/20" />
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-neutral-900 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                      View All Photos
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold transition duration-200 group-hover:text-neutral-500">{g.title}</h3>
                    <div className="mt-1 text-sm text-stone-500">{g.type}</div>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{g.summary}</p>
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
                { step: "01", title: "Consultation", desc: "We walk through your space, understand your vision, and discuss design direction, materials, and budget." },
                { step: "02", title: "Design & Planning", desc: "We finalize the layout, select materials, and create a plan so every decision is made with intention." },
                { step: "03", title: "Build & Execution", desc: "Our team executes with precision — quality craftsmanship and clear communication throughout." },
                { step: "04", title: "Final Walkthrough", desc: "We review every detail together to ensure the finished space exceeds your expectations." },
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
                <p className="mt-4 text-lg leading-8 text-stone-300">Whether it&apos;s a kitchen remodel, bathroom renovation, or a full interior transformation — reach out and we&apos;ll walk you through next steps.</p>
                <div className="mt-8 space-y-3 text-stone-300">
                  <div>📞 323-477-4733</div>
                  <div>✉️ Peachybuilders@gmail.com</div>
                  <div>📍 28047 Dorothy Dr, Agoura Hills, CA</div>
                  <div>🕐 Mon–Fri, 9am – 5pm</div>
                </div>
              </div>
              <div className="rounded-[2rem] bg-white p-7 text-neutral-900">
                <h3 className="text-xl font-semibold">Request a Free Estimate</h3>
                <p className="mt-2 text-sm text-neutral-500">Tell us about your project and we&apos;ll be in touch shortly.</p>
                <div className="mt-6 space-y-4">
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Full name" autoComplete="name" name="name" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Email address" type="email" name="email" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Phone number" type="tel" name="phone" />
                  <textarea className="h-28 w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-800" placeholder="Tell us about your project" name="message" />
                  <button type="button" className="w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-stone-50 transition hover:opacity-90">Submit Request</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-semibold tracking-[0.16em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="mt-1">Kitchens & Bathrooms — Agoura Hills, CA</div>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
            <a href="#areas" className="hover:text-neutral-900">Areas</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
