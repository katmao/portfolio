import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/profile.ts';

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
    <div className="mx-auto flex max-w-proseWide items-center justify-between px-6 py-5">
      <NavLink to="/" className="text-base font-medium uppercase tracking-widest text-slateInk/70 hover:text-primary transition-colors">
        Ekaterina Novozhilova
      </NavLink>
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
    </div>
  </header>
);

export default Navbar;
