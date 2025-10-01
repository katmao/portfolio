import { NavLink } from 'react-router-dom';
import { navLinks } from '@/data/profile.ts';

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
    <div className="mx-auto flex max-w-proseWide items-center justify-between px-6 py-4">
      <NavLink to="/" className="text-sm font-semibold uppercase tracking-[0.4em] text-slateInk/80">
        Ekaterina Novozhilova
      </NavLink>
      <nav className="hidden items-center gap-6 text-sm text-slateInk/80 sm:flex">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `relative pb-1 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-center after:scale-x-0 after:bg-primary after:transition after:content-[''] ${
                isActive ? 'text-primary after:scale-x-100' : 'hover:text-primary hover:after:scale-x-100'
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
