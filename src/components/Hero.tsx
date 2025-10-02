import { contact, researchInterests } from '@/data/profile.ts';

const focusTopics = researchInterests.topics.slice(0, 3);
const methodHighlights = researchInterests.methods.slice(0, 3);
const focusItems = [...focusTopics, 'AI social implications'];

const Hero = () => (
  <section id="top" aria-labelledby="hero-heading" className="px-4 sm:px-6">
    <div className="mx-auto flex max-w-proseWide flex-col gap-8 pt-6 sm:gap-12 sm:pt-8 lg:gap-16 lg:pt-12 lg:flex-row lg:items-start">
      <div className="order-1 flex-1 space-y-6 sm:space-y-8 lg:flex lg:flex-col lg:justify-between lg:min-h-[600px]">
        <h1
          id="hero-heading"
          className="text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl animate-fade-in"
        >
          Ekaterina Novozhilova
        </h1>
        <figure className="mx-auto w-36 sm:w-40 rounded-lg border border-slate-200 bg-white p-2 shadow-sm animate-fade-in animate-delay-150 transition-all duration-300 hover:shadow-md hover:scale-[1.02] lg:hidden">
          <img
            src="/images/1Q0A7791.jpeg"
            alt="Portrait of Ekaterina Novozhilova"
            className="w-full rounded object-cover"
          />
        </figure>
        <div className="text-lg sm:text-xl text-slateInk/70 leading-none animate-fade-in animate-delay-100">
          <p className="-mb-1">Ph.D. Candidate</p>
          <p className="-mb-1">Emerging Media Studies Division</p>
          <p className="-mb-1">College of Communication</p>
          <p>Boston University</p>
        </div>
        <div className="text-base sm:text-lg text-slateInk/75 space-y-4 sm:space-y-6 leading-relaxed animate-fade-in animate-delay-200">
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
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base text-slateInk/60 border-t border-slate-200 pt-4 sm:pt-6 animate-fade-in animate-delay-300">
          <a href={`mailto:${contact.email}`} className="font-medium text-primary hover:text-slateInk transition-all duration-300 hover:scale-105">
            ekaterin [at] bu.edu
          </a>
          <span aria-hidden="true" className="hidden sm:inline">•</span>
          <a
            href="https://scholar.google.com/citations?user=1U4PF-AAAAAJ&hl=en&oi=ao"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
          <span aria-hidden="true" className="hidden sm:inline">•</span>
          <a
            href="https://www.linkedin.com/in/ekaterina-novozhilova/"
            className="hover:text-primary transition-all duration-300 hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="grid gap-4 sm:gap-5 lg:hidden">
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5 shadow-sm animate-fade-in animate-delay-300 transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slateInk/50 font-medium">Research Focus</h2>
            <ul className="mt-3 sm:mt-4 list-disc space-y-2 sm:space-y-2.5 pl-4 sm:pl-5 text-sm sm:text-base text-slateInk/75 marker:text-slateInk/40">
              {focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5 shadow-sm animate-fade-in animate-delay-400 transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slateInk/50 font-medium">Methods</h2>
            <ul className="mt-3 sm:mt-4 list-disc space-y-2 sm:space-y-2.5 pl-4 sm:pl-5 text-sm sm:text-base text-slateInk/75 marker:text-slateInk/40">
              {methodHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <aside className="hidden w-full max-w-md flex-col gap-4 border-t border-slate-200 pt-6 sm:gap-6 sm:pt-8 lg:flex lg:sticky lg:top-32 lg:w-80 lg:border-none lg:pt-0 lg:min-h-[600px] lg:justify-start">
        <figure className="mx-auto w-40 sm:w-48 lg:w-full rounded-lg border border-slate-200 bg-white p-2 shadow-sm animate-fade-in animate-delay-200 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
          <img
            src="/images/1Q0A7791.jpeg"
            alt="Portrait of Ekaterina Novozhilova"
            className="w-full rounded object-cover"
          />
        </figure>
        <div className="grid gap-4 sm:gap-5">
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5 shadow-sm animate-fade-in animate-delay-300 transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slateInk/50 font-medium">Research Focus</h2>
            <ul className="mt-3 sm:mt-4 list-disc space-y-2 sm:space-y-2.5 pl-4 sm:pl-5 text-sm sm:text-base text-slateInk/75 marker:text-slateInk/40">
              {focusItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-6 sm:py-5 shadow-sm animate-fade-in animate-delay-400 transition-all duration-300 hover:shadow-md hover:border-slate-300">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-slateInk/50 font-medium">Methods</h2>
            <ul className="mt-3 sm:mt-4 list-disc space-y-2 sm:space-y-2.5 pl-4 sm:pl-5 text-sm sm:text-base text-slateInk/75 marker:text-slateInk/40">
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
