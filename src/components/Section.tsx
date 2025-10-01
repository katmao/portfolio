import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

const Section = ({ id, title, subtitle, eyebrow, children }: SectionProps) => (
  <section id={id} className="px-6">
    <div className="mx-auto max-w-proseWide border-t border-slate-200/70 py-14">
      <header className="mb-10 max-w-2xl space-y-3">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.45em] text-slateInk/60">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
        {subtitle ? <p className="text-base text-slateInk/80">{subtitle}</p> : null}
      </header>
      <div className="space-y-8 text-slateInk/80">{children}</div>
    </div>
  </section>
);

export default Section;
