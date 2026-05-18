export default function CTABanner() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden bg-slate-900 hero-gradient noise-bg flex items-center justify-center">
      <div className="relative z-20 max-w-3xl mx-auto text-center fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase mb-8">
          Ready when you are
        </div>

        <h2 className="text-white font-medium tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Join 500+ healthcare teams<br />running on B12.
        </h2>

        <p className="text-slate-300 mb-12 text-lg md:text-xl font-light">
          Set up in days, not months. Pick the path that works for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition text-base">
            Get started free
          </a>
          <a href="#" className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-base">
            Schedule a demo
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
            HIPAA Compliant
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
            SOC 2 Certified
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
            No credit card
          </span>
        </div>
      </div>
    </section>
  );
}