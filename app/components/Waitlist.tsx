export default function Waitlist() {
  return (
    <section className="w-full min-h-screen bg-[#050505] flex flex-col items-center justify-between py-12 px-6 relative z-10 font-sans">
      
      {/* Spacer to push content exactly to the center */}
      <div className="flex-1"></div>

      {/* Main Content Container */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-light tracking-[0.25em] uppercase mb-4 text-white">
          Join the Waitlist
        </h2>
        
        <p className="text-neutral-500 mb-10 font-light tracking-[0.05em] text-sm max-w-md mx-auto">
          Exclusive access to the inaugural drop. Limited spots available.
        </p>
        
        {/* Ultra-Premium Compact Pill Form */}
        <form 
          className="relative w-full max-w-[380px] mx-auto flex items-center bg-[#090909] border border-neutral-800 rounded-full p-1 focus-within:border-neutral-500 focus-within:bg-[#0c0c0c] transition-all duration-500 ease-out shadow-[0_0_15px_rgba(255,255,255,0.01)] hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-transparent border-none shadow-none w-full outline-none text-white placeholder:text-neutral-600 tracking-wide font-light px-5 py-2 text-sm"
            required
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="bg-white text-black rounded-full px-6 py-2.5 text-[11px] tracking-[0.15em] font-bold uppercase hover:bg-neutral-200 hover:scale-[0.97] transition-all duration-300 cursor-pointer shrink-0"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer safely pushed to the bottom */}
      <footer className="flex-1 flex flex-col justify-end w-full text-[10px] text-neutral-600 tracking-[0.2em] uppercase items-center gap-2 pb-8 mt-16">
        <span>© {new Date().getFullYear()} LUMN. All rights reserved.</span>
        <span className="text-neutral-800">Designed in stealth</span>
      </footer>
      
    </section>
  );
}