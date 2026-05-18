import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBanner from './components/MetricsBanner';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#fbfbfc] overflow-hidden relative">
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <MetricsBanner />
      <Features />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;