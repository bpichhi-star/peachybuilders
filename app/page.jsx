import { useState } from "react";

export default function PeachyBuildersSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryServices = [
    {
      title: "Hardscape",
      desc: "Custom patios, pavers, walkways, retaining walls, and structural outdoor features designed for beauty and durability.",
    },
    {
      title: "Landscape Design",
      desc: "Thoughtful planting, layout planning, lighting, and softscape design that bring balance and curb appeal to every property.",
    },
    {
      title: "Exterior Design",
      desc: "Complete outdoor transformations that unify architecture, materials, flow, and lifestyle for a polished result.",
    },
  ];

  const outdoorServices = [
    "Backyard Transformations",
    "Patios & Walkways",
    "Pavers & Driveways",
    "Retaining Walls",
    "Outdoor Living Spaces",
    "Concrete & Flatwork",
    "Turf & Low-Maintenance Yards",
    "Landscape Lighting",
  ];

  const projects = [
    {
      title: "Modern Backyard Upgrade",
      place: "Agoura Hills, CA",
      type: "Hardscape • Landscape • Lighting",
      summary: "A clean outdoor retreat with pavers, layered planting, and evening lighting designed for entertaining.",
    },
    {
      title: "Curb Appeal Refresh",
      place: "Calabasas, CA",
      type: "Driveway • Entry • Exterior Design",
      summary: "A front-of-home redesign focused on texture, symmetry, and a more elevated first impression.",
    },
    {
      title: "Outdoor Living Expansion",
      place: "Westlake Village, CA",
      type: "Patio • Seating Area • Hardscape",
      summary: "An underused backyard transformed into a refined, functional extension of the home.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "We learn your goals, walk the property, and understand the style, function, and budget you have in mind.",
    },
    {
      step: "02",
      title: "Design & Planning",
      desc: "We shape the layout, materials, and direction so the finished project feels intentional and cohesive.",
    },
    {
      step: "03",
      title: "Build & Execution",
      desc: "Our team brings the plan to life with quality workmanship, communication, and attention to detail.",
    },
    {
      step: "04",
      title: "Final Walkthrough",
      desc: "We review the project together and make sure everything is completed to the standard your home deserves.",
    },
  ];

  const values = [
    {
      title: "Reliability",
      desc: "Clear expectations, dependable follow-through, and a process homeowners can feel confident in from day one.",
    },
    {
      title: "Respect for the Home",
      desc: "Projects are managed with professionalism, cleanliness, and care for the space clients live in every day.",
    },
    {
      title: "Honest Guidance",
      desc: "Recommendations are grounded in what will truly improve the property, not just what sounds good in a sales pitch.",
    },
    {
      title: "Built to Last",
      desc: "Design and craftsmanship are approached with durability, usability, and long-term value in mind.",
    },
    {
      title: "Design Intent",
      desc: "Every project should feel cohesive and considered rather than pieced together from unrelated ideas.",
    },
    {
      title: "Client Experience",
      desc: "The goal is not only a better-looking home, but a smoother, more confidence-inspiring experience from start to finish.",
    },
  ];

  const serviceAreas = [
    "Agoura Hills",
    "Calabasas",
    "Westlake Village",
    "Woodland Hills",
    "Encino",
    "Tarzana",
    "Thousand Oaks",
    "Surrounding Los Angeles Areas",
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-semibold tracking-[0.18em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="text-xs uppercase tracking-[0.28em] text-stone-500">Outdoor Design • Hardscape • Landscape</div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <a href="#services" className="transition hover:text-neutral-950">Services</a>
            <a href="#projects" className="transition hover:text-neutral-950">Projects</a>
            <a href="#values" className="transition hover:text-neutral-950">Approach</a>
            <a href="#about" className="transition hover:text-neutral-950">About</a>
            <a href="#areas" className="transition hover:text-neutral-950">Service Areas</a>
            <a href="#contact" className="rounded-full border border-neutral-900 px-4 py-2 font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-stone-50">Get Estimate</a>
          </nav>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 md:hidden"
          >
            Menu
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-stone-200 bg-stone-50 px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-3 text-sm text-neutral-700">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#values" onClick={() => setMobileMenuOpen(false)}>Approach</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#areas" onClick={() => setMobileMenuOpen(false)}>Service Areas</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="pt-2 font-medium text-neutral-950">Get Estimate</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,181,166,0.35),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(120,113,108,0.16),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-stone-600 shadow-sm">
                Agoura Hills & Surrounding Areas
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
                Hardscape, Landscape & Exterior Design That Elevates the Way You Live.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
                Peachy Builders specializes in outdoor transformations — from pavers, patios, and retaining walls to landscape and exterior design — for homeowners seeking a more elevated exterior experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-stone-50 shadow-sm transition hover:translate-y-[-1px]">
                  View Projects
                </a>
                <a href="#contact" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900">
                  Request Free Estimate
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {["Licensed & Insured", "25+ Years Experience", "Free Estimates", "Design-Driven Approach"].map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-sm text-neutral-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Experience</div>
                  <div className="mt-2 text-3xl font-semibold text-neutral-950">25+</div>
                  <div className="mt-1 text-sm text-neutral-700">Years serving Southern California homeowners</div>
                </div>
                <div className="rounded-[1.75rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Specialty</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-950">Outdoor Living & Exterior Design</div>
                  <div className="mt-1 text-sm text-neutral-700">Positioned for a stronger outdoor-first brand identity</div>
                </div>
                <div className="rounded-[1.75rem] border border-stone-200 bg-white/80 p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Credentials</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-950">License & Coverage</div>
                  <div className="mt-1 text-sm text-neutral-700">Prominently surfaced instead of buried in the footer</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-xl shadow-stone-200/60">
                <div className="h-80 rounded-[1.5rem] bg-[linear-gradient(135deg,#d6d3d1,#f5f5f4_28%,#a8a29e_100%)] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.28))] p-6 backdrop-blur-sm">
                    <div className="text-sm uppercase tracking-[0.28em] text-stone-600">Signature Focus</div>
                    <div>
                      <div className="text-3xl font-semibold text-neutral-950">Outdoor Living, Reimagined</div>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-700">
                        Built to feel natural, polished, and enduring — spaces that add comfort, beauty, and value to the home.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-neutral-700">
                      <div className="rounded-2xl bg-white/70 p-3">Patios</div>
                      <div className="rounded-2xl bg-white/70 p-3">Pavers</div>
                      <div className="rounded-2xl bg-white/70 p-3">Retaining Walls</div>
                      <div className="rounded-2xl bg-white/70 p-3">Exterior Design</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-sm uppercase tracking-[0.24em] text-stone-500">Built Local</div>
                <div className="mt-3 text-2xl font-semibold">Design + Craftsmanship</div>
                <p className="mt-2 text-sm leading-7 text-neutral-700">
                  Positioned as a more thoughtful alternative to the generic general contractor experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Services</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">What Peachy Builders Does Best</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-700">
              The site is built around Peachy Builders' strongest identity: premium exterior transformation with a clear outdoor-living focus.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
                <div className="text-sm uppercase tracking-[0.24em] text-stone-500">Primary Service</div>
                <h3 className="mt-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-neutral-700">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-stone-500">Outdoor Categories</div>
                <h3 className="mt-4 text-2xl font-semibold">More Specific Exterior Service Buckets</h3>
                <p className="mt-3 text-neutral-700 leading-8">
                  The outdoor offering is broken down more clearly so the site feels specialized instead of broad.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {outdoorServices.map((item) => (
                  <div key={item} className="rounded-2xl bg-stone-100 px-4 py-4 text-sm font-medium text-neutral-800">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Featured Work</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Project Presentation That Feels Real</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  Instead of a random gallery, each project tells a homeowner what was done, where it happened, and what kind of result was achieved.
                </p>
              </div>
              <a href="#contact" className="text-sm font-medium text-neutral-900 underline underline-offset-4">
                Start Your Project
              </a>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={project.title} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm">
                  <div className={`h-64 ${index === 0 ? "bg-[linear-gradient(135deg,#d6d3d1,#a8a29e,#57534e)]" : index === 1 ? "bg-[linear-gradient(135deg,#e7e5e4,#cbd5c0,#78716c)]" : "bg-[linear-gradient(135deg,#f5f5f4,#d6d3d1,#78716c)]"}`} />
                  <div className="p-7">
                    <div className="text-sm uppercase tracking-[0.24em] text-stone-500">{project.place}</div>
                    <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                    <div className="mt-3 text-sm font-medium text-neutral-800">{project.type}</div>
                    <p className="mt-4 text-base leading-8 text-neutral-700">{project.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Approach</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">A Trust Framework Worth Showing</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-700">
                Inspired by the useful structure of a values section, but rewritten to fit a more premium design-build identity.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {values.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Why Choose Us</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Built to Earn Trust Quickly</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-700">
                Contractor websites convert better when they reduce uncertainty. This structure makes Peachy Builders feel credible, organized, and design-aware within seconds.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Design-First Thinking", "Outdoor spaces should feel cohesive, not pieced together. The site communicates that standard clearly."],
                ["Long-Term Value", "The emphasis is on beauty, function, and durable workmanship that adds daily enjoyment and resale appeal."],
                ["Local Expertise", "Agoura Hills and surrounding homeowners want a contractor who understands the market, lifestyle, and architecture."],
                ["Clear Communication", "A strong process section and clear CTAs make the company feel easy to work with before contact is ever made."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Process</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">A Clear Path From Estimate to Finished Project</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-sm">
                  <div className="text-sm font-medium tracking-[0.24em] text-stone-500">{item.step}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="areas" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Service Areas</div>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Local Positioning for Trust and SEO</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  The site should clearly communicate where Peachy Builders works, while creating the foundation for service-area pages.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-5 text-sm font-medium text-neutral-800 shadow-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-500">Licensing & Credibility</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">Credentials Should Be Visible, Not Hidden</h2>
                <p className="mt-4 text-base leading-8 text-neutral-700">
                  One of the strongest ideas worth incorporating is surfacing license and company credibility as a deliberate section rather than burying it at the bottom.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-stone-100 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Status</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-950">Licensed & Insured</div>
                </div>
                <div className="rounded-[1.5rem] bg-stone-100 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">License</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-950">License #1058911</div>
                </div>
                <div className="rounded-[1.5rem] bg-stone-100 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-stone-500">Focus</div>
                  <div className="mt-2 text-lg font-semibold text-neutral-950">Exterior & Outdoor Living</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-neutral-900 text-stone-50 shadow-2xl shadow-stone-300/40">
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.95fr] lg:p-12">
              <div>
                <div className="text-sm uppercase tracking-[0.28em] text-stone-300">Contact</div>
                <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">Ready to Transform Your Outdoor Space?</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
                  Whether you're planning a patio, paver driveway, exterior redesign, or backyard transformation, Peachy Builders is the team to call first.
                </p>
                <div className="mt-8 space-y-3 text-sm text-stone-300">
                  <div>Phone: 323-477-4733</div>
                  <div>Email: Peachybuilders@gmail.com</div>
                  <div>28047 Dorothy Dr, Agoura Hills, CA</div>
                  <div>Hours: 9:00 am – 5:00 pm</div>
                </div>
              </div>
              <div className="rounded-[2rem] bg-white p-6 text-neutral-900">
                <div className="text-xl font-semibold">Request a Free Estimate</div>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  Tell us about your project and we'll follow up to discuss scope, style, and next steps.
                </p>
                <form className="mt-6 space-y-4">
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-neutral-900" placeholder="Full name" name="name" autoComplete="name" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-neutral-900" placeholder="Email address" name="email" type="email" autoComplete="email" />
                  <input className="w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-neutral-900" placeholder="Phone number" name="phone" type="tel" autoComplete="tel" />
                  <textarea className="h-32 w-full rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-neutral-900" placeholder="Tell us about your project" name="message" />
                  <button type="submit" className="w-full rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:opacity-95">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-neutral-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-semibold tracking-[0.18em] text-neutral-900">PEACHY BUILDERS</div>
            <div className="mt-2">Hardscape, Landscape & Exterior Design for elevated outdoor living.</div>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}