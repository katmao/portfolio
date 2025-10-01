import { contact, researchInterests } from '@/data/profile.ts';

const focusTopics = researchInterests.topics.slice(0, 3);
const methodHighlights = researchInterests.methods.slice(0, 3);
const focusItems = [...focusTopics, 'AI social implications'];

const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="px-6">
    <div className="mx-auto flex max-w-proseWide flex-col gap-8 pt-4 sm:gap-16 sm:pt-8 lg:flex-row lg:items-start">
      <div className="flex-1 space-y-6">
        <h1
          id="hero-heading"
          className="text-5xl font-semibold leading-tight text-primary sm:text-6xl"
        >
          Ekaterina Novozhilova
        </h1>
        <div className="text-lg text-slateInk/80 leading-[1.05] space-y-0">
          <p>Ph.D. Candidate</p>
          <p>Emerging Media Studies Division</p>
          <p>College of Communication</p>
          <p>Boston University</p>
        </div>
        <div className="text-base text-slateInk/80 space-y-4">
          <p>
            I am Ekaterina (Katya) Novozhilova, a Ph.D. Candidate in the Division of Emerging Media
            Studies at Boston University's College of Communication (expected graduation July 2026).
            My research examines how artificial intelligence (AI) technologies shape human
            communication, with a focus on public perceptions of AI, the carry-over effects of
            human-AI interaction (HAII) on human-human interaction (HHI), and the design and policy
            implications of communicative AI.
          </p>
          <p>
            I approach AI scholarship from a human-centered perspective, emphasizing not just system
            performance but also how these technologies reshape interpersonal communication and
            societal practices. My work integrates survey research, large-scale computational
            analysis, online and lab-based experiments, and psychophysiological measures. Across
            these projects, my goal is to develop evidence-based frameworks that guide the ethical
            design and governance of AI systems for human wellbeing.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slateInk/70">
          <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:underline">
            ekaterin [at] bu.edu
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://scholar.google.com/citations?user=1U4PF-AAAAAJ&hl=en&oi=ao"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://www.linkedin.com/in/ekaterina-novozhilova/"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <aside className="flex w-full max-w-md flex-col gap-6 border-t border-slate-200/80 pt-8 lg:sticky lg:top-32 lg:w-72 lg:border-none lg:pt-0">
        <figure className="rounded-3xl border border-slate-200/80 bg-white p-4 shadow-subtle">
          <img
            src="/images/1Q0A7791.jpeg"
            alt="Portrait of Ekaterina Novozhilova"
            className="w-full rounded-2xl object-cover"
          />
        </figure>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-slate-200/70 bg-white px-5 py-6 shadow-subtle">
            <h2 className="text-xs uppercase tracking-[0.45em] text-slateInk/60">Research Focus</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slateInk/80 marker:text-primary">
              {focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white px-5 py-6 shadow-subtle">
            <h2 className="text-xs uppercase tracking-[0.45em] text-slateInk/60">Methods</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slateInk/80 marker:text-primary">
              {methodHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
