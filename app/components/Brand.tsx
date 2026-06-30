export default function Brand() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col items-center justify-center z-40 pointer-events-none mt-8">
      <h1 className="brand-lumn text-7xl md:text-9xl font-light tracking-[0.4em] uppercase mb-8 opacity-0">
        Lumn
      </h1>
      <p className="brand-tagline text-lg md:text-xl text-neutral-400 font-light tracking-[0.1em] opacity-0 max-w-md mx-auto">
        Designed to illuminate individuality.
      </p>
    </div>
  );
}