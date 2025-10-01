import { contact, researchInterests } from '@/data/profile.ts';

const focusTopics = researchInterests.topics.slice(0, 3);
const methodHighlights = researchInterests.methods.slice(0, 3);
const focusItems = [...focusTopics, 'AI social implications'];

const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="px-6">
    <div className="mx-auto flex max-w-proseWide flex-col gap-12 pt-8 sm:gap-16 sm:pt-12 lg:flex-row lg:items-start">
      <div className="flex-1 space-y-8">
        <h1
          id="hero-heading"
          className="text-5xl font-medium leading-tight text-primary sm:text-6xl"
        >
          Ekaterina Novozhilova
        </h1>
        <div className="text-xl text-slateInk/70 leading-relaxed space-y-1">
          <p>Ph.D. Candidate</p>
          <p>Emerging Media Studies Division</p>
          <p>College of Communication</p>
          <p>Boston University</p>
        </div>
        <div className="text-lg text-slateInk/75 space-y-6 leading-relaxed">
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
        <div className="flex flex-wrap items-center gap-4 text-base text-slateInk/60 border-t border-slate-200 pt-6">
          <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:text-slateInk transition-colors">
            ekaterin [at] bu.edu
          </a>
          <span aria-hidden="true">•</span>
          <a
            href="https://scholar.google.com/citations?user=1U4PF-AAAAAJ&hl=en&oi=ao"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
          <span aria-hidden="true">•</span>
          <a
            href="https://www.linkedin.com/in/ekaterina-novozhilova/"
            className="hover:text-primary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <aside className="flex w-full max-w-md flex-col gap-6 border-t border-slate-200 pt-8 lg:sticky lg:top-32 lg:w-80 lg:border-none lg:pt-0">
        <figure className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
          <img
            src="/images/1Q0A7791.jpeg"
            alt="Portrait of Ekaterina Novozhilova"
            className="w-full rounded object-cover"
          />
        </figure>
        <div className="grid gap-5">
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <h2 className="text-sm uppercase tracking-widest text-slateInk/50 font-medium">Research Focus</h2>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-base text-slateInk/75 marker:text-slateInk/40">
              {focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-6 py-5 shadow-sm">
            <h2 className="text-sm uppercase tracking-widest text-slateInk/50 font-medium">Methods</h2>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-base text-slateInk/75 marker:text-slateInk/40">
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
