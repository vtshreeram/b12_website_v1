export default function Navbar({ isDrawerOpen, setIsDrawerOpen }) {
  return (
    <>
      {/* Mobile Drawer Overlay */}
      <div
        id="drawer-overlay"
        className={`fixed inset-0 bg-gray-900/40 z-40 transition-opacity duration-300 backdrop-blur-sm ${isDrawerOpen ? 'opacity-100' : 'hidden opacity-0'}`}
        onClick={() => setIsDrawerOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div
        id="drawer"
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <span className="font-semibold text-gray-900">Menu</span>
          <button onClick={() => setIsDrawerOpen(false)} className="text-gray-500 hover:text-gray-900 p-2 -mr-2 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="px-6 py-8 flex flex-col space-y-6 text-gray-600 font-medium text-lg">
          <a href="#platform" className="hover:text-blue-600 transition" onClick={() => setIsDrawerOpen(false)}>Platform</a>
          <a href="#who-we-serve" className="hover:text-blue-600 transition" onClick={() => setIsDrawerOpen(false)}>Who We Serve</a>
          <a href="#company" className="hover:text-blue-600 transition" onClick={() => setIsDrawerOpen(false)}>Company</a>
        </div>
        <div className="mt-auto p-6 border-t border-gray-100">
          <a href="#cta" className="block w-full text-center bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-black transition" onClick={() => setIsDrawerOpen(false)}>
            Get started
          </a>
        </div>
      </div>
    </>
  );
}