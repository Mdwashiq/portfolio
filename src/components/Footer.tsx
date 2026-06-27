import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-surface-soft relative z-10 py-16 text-body-text">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand logo & Status indicator */}
        <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left">
          <div className="flex items-center space-x-3 font-heading font-bold text-lg">
            <div className="w-1.5 h-5 bg-primary" />
            <span className="text-ink tracking-[0.3px] uppercase">
              MOHAMED WASHIQ
            </span>
          </div>
          
          <div className="inline-flex items-center space-x-2 bg-white border border-hairline py-1 px-3 rounded-none text-[9px] font-mono font-bold tracking-widest text-muted-text">
            <span className="w-1.5 h-1.5 rounded-none bg-primary animate-pulse" />
            <span>AVAILABLE FOR SELECT OFFERS</span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/-washiq7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-hairline hover:bg-primary hover:text-white hover:border-primary text-muted-text hover:text-white transition-all cursor-none rounded-none"
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
            className="p-3 bg-white border border-hairline hover:bg-primary hover:text-white hover:border-primary text-muted-text hover:text-white transition-all cursor-none rounded-none"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://wa.me/919789783693"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white border border-hairline hover:bg-primary hover:text-white hover:border-primary text-muted-text hover:text-white transition-all cursor-none rounded-none"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>

        {/* Right: Circular scroll-top control & Disclaimer */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          {/* Scroll-top is circular button-icon (48x48px) as per guidelines */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-surface-card border border-hairline hover:bg-ink hover:text-white text-ink flex items-center justify-center transition-all cursor-none group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <div className="text-[10px] font-mono text-muted-text flex items-center mt-1">
            <span>© {currentYear} MW. PROTOTYPED UNDER BMW CORPORATE SPECIFICATION.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
