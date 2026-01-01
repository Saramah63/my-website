export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-semibold text-slate-900">
              Mindshift for Lifeshift
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              Transform your mindset, transform your life. Professional coaching
              for sustainable personal and career growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Life Coaching</li>
              <li>Career Coaching</li>
              <li>Executive Coaching</li>
              <li>Group Coaching</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>📧 saramah63@gmail.com</li>
              <li>🌍 Virtual sessions worldwide</li>
              <li>💬 English & فارسی</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-slate-500 md:flex-row">
          <p>© 2025 Mindshift for Lifeshift. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
