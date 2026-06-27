import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';
import BackgroundBlobs from './components/BackgroundBlobs';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll once loading screen is complete
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {/* 1. Loading Preloader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Website Wrapper */}
      {!isLoading && (
        <div className="relative text-white min-h-screen font-body select-none">
          {/* Scroll Progress Indicator */}
          <ScrollProgressBar />

          {/* Interactive Mouse follow and Glow */}
          <CustomCursor />

          {/* Slow moving layout background glows */}
          <BackgroundBlobs />

          {/* Interactive Node grid canvas background */}
          <ParticleBackground />

          {/* Sticky Header Nav */}
          <Navbar />

          {/* Content sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Achievements />
            <Contact />
          </main>

          {/* Footnotes */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
