import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-sky-100 border-t-4 border-slate-900 mt-auto shadow-pixel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-slate-700 text-center sm:text-left font-mono">
            © {new Date().getFullYear()} Player One. All rights reserved.
          </p>

          {/* Footer Navigation */}
          <nav className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-mono transition-colors ${
                  isActive
                    ? "text-pink-500 underline underline-offset-4"
                    : "text-slate-700 hover:text-pink-500"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-mono transition-colors ${
                  isActive
                    ? "text-pink-500 underline underline-offset-4"
                    : "text-slate-700 hover:text-pink-500"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-mono transition-colors ${
                  isActive
                    ? "text-pink-500 underline underline-offset-4"
                    : "text-slate-700 hover:text-pink-500"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}