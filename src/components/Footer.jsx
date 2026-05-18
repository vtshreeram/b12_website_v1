export default function Footer() {
  return (
    <footer className="bg-white text-gray-500 py-16 px-8 md:px-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-slate-900 font-semibold tracking-tight mb-4 flex items-center gap-2 text-xl">
            <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-[10px] font-bold">B</div>
            B12 Health
          </div>
          <p className="text-sm max-w-sm mb-6 leading-relaxed">
            The Clinical Operating System designed to make care your primary focus.
          </p>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact Sales</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition">Engineering Blog</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Case Studies</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <div>&copy; 2026 B12 Health. All rights reserved.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-slate-900 transition">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}