import type { TimelineEntry } from '@/data/profile.ts';

type TimelineListProps = {
  entries: TimelineEntry[];
};

const TimelineList = ({ entries }: TimelineListProps) => (
  <ol className="relative border-l border-slate-200/80 pl-8">
    {entries.map((item) => (
      <li key={`${item.role}-${item.organization}`} className="mb-10 last:mb-0">
        <div className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-primary bg-white" />
        <div className="space-y-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="text-lg font-semibold text-primary">{item.role}</h3>
            <span className="text-xs uppercase tracking-[0.35em] text-slateInk/60">
              {item.timeframe}
            </span>
          </div>
          <p className="text-sm text-slateInk/80">{item.organization}</p>
          {item.location ? (
            <p className="text-sm text-slateInk/60">{item.location}</p>
          ) : null}
          <ul className="space-y-2 text-sm text-slateInk/80">
            {item.details.map((detail) => (
              <li key={detail} className="leading-relaxed">
                {detail}
              </li>
            ))}
          </ul>
          {item.principalInvestigators ? (
            <p className="text-sm font-medium text-slateInk/70">
              PIs: {item.principalInvestigators.join(', ')}
            </p>
          ) : null}
        </div>
      </li>
    ))}
  </ol>
);

export default TimelineList;
