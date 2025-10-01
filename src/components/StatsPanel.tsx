import type { Stat } from '@/data/profile.ts';

type StatsPanelProps = {
  stats: Stat[];
};

const StatsPanel = ({ stats }: StatsPanelProps) => (
  <dl className="grid gap-4">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="rounded-2xl border border-slate-200/70 bg-white px-5 py-6 shadow-subtle"
      >
        <dt className="text-xs uppercase tracking-[0.45em] text-slateInk/60">{stat.label}</dt>
        <dd className="mt-3 text-3xl font-semibold text-primary">{stat.value}</dd>
        {stat.description ? (
          <p className="mt-2 text-sm text-slateInk/80">{stat.description}</p>
        ) : null}
      </div>
    ))}
  </dl>
);

export default StatsPanel;
