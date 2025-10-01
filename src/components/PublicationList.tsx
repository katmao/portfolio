import type { Publication } from '@/data/profile.ts';

type PublicationListProps = {
  items: Publication[];
};

const PublicationList = ({ items }: PublicationListProps) => (
  <ul className="space-y-4 text-sm leading-relaxed text-slateInk/80">
    {items.map((item) => (
      <li
        key={`${item.title}-${item.venue}`}
        className="rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-subtle"
      >
        <p className="font-medium text-primary">{item.title}</p>
        <p className="mt-1 text-slateInk/70">{item.venue}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slateInk/60">
          <span>{item.year}</span>
          {item.notes ? (
            <span className="text-slateInk/60 normal-case tracking-normal">{item.notes}</span>
          ) : null}
        </div>
      </li>
    ))}
  </ul>
);

export default PublicationList;
