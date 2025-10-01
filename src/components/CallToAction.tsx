import { collaborationCTA } from '@/data/profile.ts';

const CallToAction = () => {
  const { eyebrow, headline, description, actions } = collaborationCTA;

  return (
    <section id="connect" className="px-6 pb-24">
      <div className="mx-auto max-w-proseWide rounded-3xl border border-slate-200/80 bg-white px-8 py-14 shadow-subtle">
        <p className="text-xs uppercase tracking-[0.45em] text-slateInk/60">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
          {headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-slateInk/80">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              className={
                action.variant === 'secondary'
                  ? 'inline-flex items-center justify-center rounded-full border border-slate-200/80 px-5 py-3 text-sm font-medium text-primary hover:border-primary'
                  : 'inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/80'
              }
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
