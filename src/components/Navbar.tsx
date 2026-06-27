import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Services', id: 'services' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 flex items-center ${
          isScrolled 
            ? 'bg-black border-b border-hairline shadow-lg' 
            : 'bg-black/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
          
          {/* Logo with BMW M Tricolor vertical bar */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-3 font-heading font-bold text-lg group cursor-none"
          >
            <div className="w-2 h-6 flex flex-col">
              <div className="h-1/3 bg-m-blue-light" />
              <div className="h-1/3 bg-m-blue-dark" />
              <div className="h-1/3 bg-m-red" />
            </div>
            <span className="text-white tracking-[1px] uppercase group-hover:text-m-red transition-colors">
              Washiq M
            </span>
          </button>

          {/* Desktop Nav Links (Sentence-case typography.nav-link) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative py-1 text-sm font-normal transition-colors duration-300 cursor-none ${
                  activeSection === link.id ? 'text-white' : 'text-muted-text hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavTabBorder"
                    className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-m-red"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA: Rectangular silhouette */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 bg-black border border-white text-xs font-bold tracking-[1.5px] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 rounded-none cursor-none inline-flex items-center space-x-1"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors cursor-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-30 lg:hidden bg-black border-b border-hairline"
          >
            {/* Top M stripe accent on mobile menu */}
            <div className="m-stripe" />
            
            <div className="px-6 py-8 flex flex-col space-y-4 text-left">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-base font-normal py-2 border-b border-hairline-strong pb-2 cursor-none ${
                    activeSection === link.id ? 'text-m-red' : 'text-muted-text hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-center space-x-1 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase transition-all rounded-none cursor-none"
              >
                <span>HIRE ME</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
