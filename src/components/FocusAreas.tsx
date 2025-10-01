import { focusAreas } from '@/data/profile.ts';

const FocusAreas = () => (
  <div className="grid gap-6 lg:grid-cols-3">
    {focusAreas.map((area) => (
      <article
        key={area.title}
        className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white px-6 py-6 shadow-subtle transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div>
          <h3 className="text-xl font-semibold text-primary">{area.title}</h3>
          <p className="mt-3 text-sm text-slateInk/80">{area.description}</p>
        </div>
        <ul className="mt-auto flex flex-wrap gap-2 text-xs text-slateInk/70">
          {area.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200/80 px-3 py-1 uppercase tracking-[0.3em]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export default FocusAreas;
