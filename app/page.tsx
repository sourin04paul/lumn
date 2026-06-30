import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-8 md:px-16">
        <h1 className="text-lg font-medium tracking-[0.45em]">
          LUMN
        </h1>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[82vh] flex-col items-center justify-center px-6 text-center">
        <Image
          src="/logo.svg"
          alt="LUMN Logo"
          width={190}
          height={190}
          priority
          className="mb-14"
        />

        <h1 className="mb-8 text-6xl font-semibold tracking-[0.5em] md:text-8xl">
          LUMN
        </h1>

        <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-200 md:text-3xl">
          Designed to illuminate individuality.
        </p>

        <p className="mb-14 text-gray-500">
          Launching our first collection soon.
        </p>

        <button className="rounded-full border border-white px-10 py-4 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
          Launching Soon
        </button>
      </section>
    </main>
  );
}