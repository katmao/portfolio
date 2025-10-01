import { contact } from '@/data/profile.ts';

const Footer = () => (
  <footer className="border-t border-slate-200/70 bg-white py-10 text-center text-xs text-slateInk/60">
    <p>
      (c) {new Date().getFullYear()} {contact.name}. Built with React and Tailwind CSS.
    </p>
  </footer>
);

export default Footer;
