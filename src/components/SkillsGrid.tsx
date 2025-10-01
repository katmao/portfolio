import { skills } from '@/data/profile.ts';

const skillEntries = [
  { title: 'Data Analysis', items: skills.data },
  { title: 'Survey Platforms', items: skills.survey },
  { title: 'Analytics & Listening', items: skills.analytics },
  { title: 'AI-Enhanced Tools', items: skills.aiTools },
  { title: 'Psychophysiological Research', items: skills.psychophysiology },
  { title: 'Data Visualisation', items: skills.visualization },
  { title: 'CRM', items: skills.crm },
  { title: 'Creative Production', items: skills.creative },
  { title: 'Languages', items: skills.languages },
];

const SkillsGrid = () => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {skillEntries.map((group) => (
      <article
        key={group.title}
        className="rounded-2xl border border-slate-200/80 bg-white px-5 py-5 shadow-subtle"
      >
        <h3 className="text-xs uppercase tracking-[0.4em] text-slateInk/60">{group.title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-slateInk/80">
          {group.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export default SkillsGrid;
