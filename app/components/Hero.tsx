import Image from 'next/image';

export default function Hero() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      
      {/* BULLETPROOF POSITIONING: calc() centers it perfectly and GSAP cannot overwrite it when scaling */}
      <div className="logo-wrapper absolute left-[calc(50%-75px)] top-[calc(50%-75px)] w-[150px] h-[150px] flex items-center justify-center z-50 pointer-events-auto">
        {/* Soft Blue Glow */}
        <div className="logo-glow absolute inset-0 rounded-full glow-effect opacity-50 blur-xl -z-10 bg-blue-500/10 transition-opacity duration-1000 scale-125"></div>
        
        {/* Logo */}
        <Image 
          src="/logo.svg" 
          alt="LUMN Logo" 
          width={150} 
          height={150} 
          className="logo-svg object-contain"
          priority
        />
      </div>

      {/* Guaranteed Centered Arrow restored with native Tailwind transform */}
      <div className="scroll-indicator absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center justify-center gap-3">
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/60 font-light">
          Scroll
        </span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="1.5"
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="animate-bounce"
        >
          <line x1="12" y1="4" x2="12" y2="20"></line>
          <polyline points="18 14 12 20 6 14"></polyline>
        </svg>
      </div>

    </div>
  );
}