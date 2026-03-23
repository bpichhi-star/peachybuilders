export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold leading-tight">
          Hardscape, Landscape & Exterior Design
        </h1>
        <p className="mt-6 text-lg text-neutral-700 max-w-2xl">
          Peachy Builders specializes in outdoor transformations — patios,
          pavers, retaining walls, and full exterior design.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full">
            Get Estimate
          </a>
        </div>
      </section>
      {/* SERVICES */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>Hardscape</div>
            <div>Landscape Design</div>
            <div>Exterior Design</div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <img src="/images/project1.jpg" />
            <img src="/images/project2.jpg" />
            <img src="/images/project3.jpg" />
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">
            Request a Free Estimate
          </h2>
          <div className="mt-6 space-y-2">
            <div>Phone: 323-477-4733</div>
            <div>Email: Peachybuilders@gmail.com</div>
            <div>28047 Dorothy Dr, Agoura Hills, CA</div>
          </div>
          <form className="mt-8 space-y-4">
            <input placeholder="Name" className="w-full p-3 rounded text-black" />
            <input placeholder="Email" className="w-full p-3 rounded text-black" />
            <textarea placeholder="Project details" className="w-full p-3 rounded text-black" />
            <button className="bg-white text-black px-6 py-3 rounded-full">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
