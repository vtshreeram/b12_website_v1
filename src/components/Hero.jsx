export default function Hero({ isDrawerOpen, setIsDrawerOpen }) {
  return (
    <div className="noise-bg hero-gradient relative pb-32">
      <nav className="flex items-center justify-between px-6 md:px-12 py-8 relative z-20 fade-in-up">
        <div className="text-white font-semibold text-xl tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-slate-900 text-xs font-bold">B</div>
          B12 Health
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm text-white/80 font-medium">
          <a href="#platform" className="hover:text-white transition">Platform</a>
          <a href="#who-we-serve" className="hover:text-white transition">Who We Serve</a>
          <a href="#company" className="hover:text-white transition">Company</a>
          <div className="flex items-center space-x-4 border-l border-white/20 pl-6">
            <a href="#" className="hover:text-white transition">Log in</a>
            <a href="#cta" className="bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-gray-100 transition shadow-sm">
              Get started
            </a>
          </div>
        </div>

        <button onClick={() => setIsDrawerOpen(true)} className="md:hidden text-white p-2 -mr-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center text-center mt-12 md:mt-24 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase mb-8 fade-in-up">
          The First Ever Clinical Operating System
        </div>

        <h1 className="text-white font-medium tracking-tight mb-8 leading-[1.05] max-w-5xl fade-in-up" style={{ fontSize: 'clamp(3rem, 6.5vw, 5.5rem)' }}>
          Make care your<br />primary focus.
        </h1>
        <p className="text-white/80 max-w-2xl mb-12 leading-relaxed text-lg md:text-xl font-light fade-in-up delay-100">
          B12 Health handles complex clinical data, patient intake, and revenue cycle monitoring upfront to make sure your clinic runs flawlessly, and you have more capacity to provide care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-200">
          <a href="#cta" className="bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-500 transition shadow-lg inline-flex items-center justify-center gap-2">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}