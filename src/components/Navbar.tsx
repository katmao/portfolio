import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/profile.ts';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-proseWide items-center justify-between px-6 py-5">
        <NavLink to="/" className="text-base font-medium uppercase tracking-widest text-slateInk/70 hover:text-primary transition-colors">
          Ekaterina Novozhilova
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-base text-slateInk/70 sm:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative pb-0.5 transition-colors ${
                  isActive ? 'text-primary font-medium' : 'hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-md text-slateInk/70 hover:text-primary hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm">
          <nav className="mx-auto max-w-proseWide px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-base transition-colors ${
                    isActive ? 'text-primary font-medium' : 'text-slateInk/70 hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
