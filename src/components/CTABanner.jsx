export default function CTABanner() {
  return (
    <section id="cta" className="py-32 px-6 relative overflow-hidden bg-slate-900 hero-gradient noise-bg flex items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-20 max-w-3xl mx-auto text-center fade-in-up">
        <h2 className="text-white font-medium tracking-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Discover a new dawn<br />for healthcare.
        </h2>
        <p className="text-slate-300 mb-10 text-lg md:text-xl font-light">
          Save time, reduce administrative friction, and improve patient outcomes. All with B12 Health.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg text-base">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}