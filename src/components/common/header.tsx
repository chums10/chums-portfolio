import { useState } from "react";

import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-pink-500 underline underline-offset-4";
    } else {
      return "text-slate-700 hover:text-pink-500";
    }
  };

  return (
    <header className="bg-sky-100 border-b-4 border-slate-900 sticky top-0 z-50">
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-900/50 transition-opacity duration-300 md:hidden z-40",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <Section className="py-0" containerClassName="relative z-50 bg-sky-100">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={toggleMenu}>
              <img src={logo} alt="Player One logo" className="h-15 w-auto" />
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("font-mono text-lg tracking-wide transition-colors", getLinkClass(isActive))}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Contact Button */}
            <NavLink to="/contact">
              <Button className="border-2 border-slate-900 bg-pink-400 text-slate-900 font-pixelify font-semibold text-sm px-4 py-2 shadow-pixel-sm rounded-none hover:bg-pink-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                Contact
              </Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 border-2 border-slate-900 bg-white text-slate-900 shadow-pixel-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Section>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "md:hidden border-t-4 border-slate-900 bg-sky-100 transition-all duration-300 ease-in-out grid overflow-hidden absolute top-16 left-0 right-0 shadow-pixel z-50",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn("font-mono text-lg py-2 transition-colors", getLinkClass(isActive))}
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t-2 border-slate-300">
              <NavLink to="/contact" onClick={toggleMenu} className="inline-block w-full">
                <Button className="w-full border-2 border-slate-900 bg-pink-400 text-slate-900 font-pixelify font-semibold text-sm px-4 py-3 shadow-pixel-sm rounded-none hover:bg-pink-400 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}