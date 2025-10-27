
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const spotlight = document.getElementById('spotlight');
      if (spotlight) {
        spotlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = mainContentRef.current?.querySelectorAll('section[id]');
    sections?.forEach((section) => observer.observe(section));

    return () => sections?.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => scrollObserver.observe(el));
  
    return () => elements.forEach((el) => scrollObserver.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div id="spotlight" className="pointer-events-none fixed inset-0 z-30 transition duration-300" />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} />
          <main id="content" ref={mainContentRef} className="pt-24 lg:w-1/2 lg:py-24">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;