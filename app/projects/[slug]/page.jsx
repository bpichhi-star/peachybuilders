"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const PROJECTS = {
  kitchens: {
    title: "Kitchens",
    type: "Kitchen Remodels",
    summary: "Full kitchen transformations from layout and cabinetry to countertops, backsplash, and fixtures — built to impress and function beautifully.",
    cover: "/images/projects/kitchens/kb-10.jpg",
  },
  bathrooms: {
    title: "Bathrooms",
    type: "Bathroom Remodels",
    summary: "Spa-inspired bathroom renovations featuring custom tile work, premium fixtures, vanities, and thoughtful layouts built around how you live.",
    cover: "/images/projects/bathrooms/WH_Bath.png",
  },
  "full-renovations": {
    title: "Full Renovations",
    type: "Hardscape • Landscape • Lighting • Cabanas • Pool",
    summary: "A clean outdoor retreat with pavers, layered planting, and evening lighting built for entertaining. Every detail was considered — from the custom stone coping to the cabana structure and precision-placed landscape lighting.",
    cover: "/images/projects/full-renovations/full_yard_day.png",
  },
  pools: {
    title: "Pools",
    type: "Custom Pool Design & Construction",
    summary: "Resort-style and geometric custom pools designed and built from the ground up — shapes, water features, and finishes tailored to your property.",
    cover: "/images/projects/pools/kb-001.jpg",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const project = PROJECTS[slug];

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`/api/images?folder=${slug}`)
      .then((r) => r.json())
      .then((data) => { setPhotos(data.images || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-stone-50 px-6 text-center">
        <p className="text-2xl font-semibold text-neutral-900">Project not found.</p>
        <button type="button" onClick={() => router.back()} className="rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium transition hover:bg-neutral-900 hover:text-white">Back</button>
      </div>
    );
  }

  const prevPhoto = () => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length);
  const nextPhoto = () => setLightboxIndex((i) => (i + 1) % photos.length);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button type="button" onClick={() => router.back()} className="group flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-300 bg-white transition group-hover:bg-neutral-900 group-hover:border-neutral-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-neutral-600 transition group-hover:text-white"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
            </div>
            <div>
              <div className="text-base font-semibold tracking-[0.16em] text-neutral-900">PEACHY BUILDERS</div>
              <div className="text-xs uppercase tracking-[0.24em] text-stone-400">Back to Projects</div>
            </div>
          </button>
          <Link href="/#contact" className="rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium transition hover:bg-neutral-900 hover:text-stone-50">Get Estimate</Link>
        </div>
      </header>
      <main>
        <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${project.cover}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{project.title}</h1>
              <p className="mt-2 text-sm font-medium text-white/70">{project.type}</p>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Project Overview</div>
              <p className="mt-4 text-lg leading-9 text-neutral-600">{project.summary}</p>
            </div>
          </div>
        </section>
        <section className="bg-stone-100 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <div className="text-sm uppercase tracking-[0.28em] text-stone-400">Gallery</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Project Photos</h2>
            </div>
            {loading ? (
              <div className="flex h-64 items-center justify-center text-stone-400">Loading photos...</div>
            ) : photos.length === 0 ? (
              <div className="flex h-64 items-center justify-center rounded-[2rem] border-2 border-dashed border-stone-300 bg-white text-stone-400">Photos coming soon</div>
            ) : (
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {photos.map((src, i) => (
                  <div key={src} className="group mb-4 cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg break-inside-avoid" onClick={() => setLightboxIndex(i)}>
                    <div className="relative overflow-hidden">
                      <img src={src} alt={`${project.title} photo ${i + 1}`} className="w-full object-cover transition duration-500 group-hover:scale-105" loading={i === 0 ? "eager" : "lazy"} />
                      <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/0 transition-all duration-300 group-hover:bg-neutral-900/20">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-neutral-800"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 1v10h10V5H5z" clipRule="evenodd" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2.5rem] bg-neutral-900 p-10 text-stone-50 shadow-2xl lg:p-14">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">Love what you see?</h2>
                  <p className="mt-3 text-lg text-stone-300">Let&apos;s talk about your project — estimates are always free.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/#contact" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:opacity-90">Request Estimate</Link>
                  <button type="button" onClick={() => router.back()} className="rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10">View All Projects</button>
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
            <div className="mt-1">Hardscape, Landscape &amp; Exterior Design — Agoura Hills, CA</div>
          </div>
          <div className="flex gap-6">
            <Link href="/#services" className="hover:text-neutral-900">Services</Link>
            <Link href="/#projects" className="hover:text-neutral-900">Projects</Link>
            <Link href="/#areas" className="hover:text-neutral-900">Areas</Link>
            <Link href="/#contact" className="hover:text-neutral-900">Contact</Link>
          </div>
        </div>
      </footer>
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm" onClick={() => setLightboxIndex(null)}>
          <button type="button" className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20" onClick={() => setLightboxIndex(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg>
          </button>
          {photos.length > 1 && (
            <button type="button" className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20" onClick={(e) => { e.stopPropagation(); prevPhoto(); }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" /></svg>
            </button>
          )}
          <img src={photos[lightboxIndex]} alt={`${project.title} ${lightboxIndex + 1}`} className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          {photos.length > 1 && (
            <button type="button" className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20" onClick={(e) => { e.stopPropagation(); nextPhoto(); }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
            </button>
          )}
          {photos.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs text-white/70 backdrop-blur-sm">{lightboxIndex + 1} / {photos.length}</div>
          )}
        </div>
      )}
    </div>
  );
}
