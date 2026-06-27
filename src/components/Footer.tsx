import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-dark/80 backdrop-blur-md relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand and Status */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <div className="flex items-center space-x-2 font-heading font-bold text-lg">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mohamed Washiq
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          
          {/* Pulsing Status indicator */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/5 py-1 px-3 rounded-full text-[10px] font-mono text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR SELECT OFFERS</span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white/50 hover:text-white transition-all cursor-none"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="#"
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white/50 hover:text-white transition-all cursor-none"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

        {/* Right Side: Back to top & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-accent transition-all cursor-none group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <div className="text-[10px] font-mono text-white/40 flex items-center mt-1">
            <span>© {currentYear} MW. Built with</span>
            <Heart className="w-3 h-3 text-rose-500 mx-1 fill-rose-500" />
            <span>in India.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
