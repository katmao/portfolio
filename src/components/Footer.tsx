import { contact } from '@/data/profile.ts';

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-12 text-center text-sm text-slateInk/50">
    <p>
      © {new Date().getFullYear()} {contact.name}. Built with React and Tailwind CSS.
    </p>
  </footer>
);

export default Footer;
