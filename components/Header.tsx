export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-slate-900">
          Mindshift for Lifeshift
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#sessions" className="hover:text-slate-900">Sessions</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#agreement" className="hover:text-slate-900">Agreement</a>
          <a href="#what-is-coaching" className="hover:text-slate-900">Coaching</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
            فارسی
          </button>
          <a
            href="#get-started"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
