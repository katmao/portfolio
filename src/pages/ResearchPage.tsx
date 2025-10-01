import type { ReactNode } from 'react';

type ResearchArea = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  works: Array<{ content: ReactNode; href?: string }>;
};

const researchAreas: ResearchArea[] = [
  {
    title: 'New Approaches to Study AI Perceptions',
    description:
      'My work examines how people understand and evaluate the increasingly human-like capabilities of AI systems. Whereas much current scholarship takes a technology-centered approach that focuses on refining systems for narrow tasks, I emphasize the broader societal implications of AI. In particular, I study how ontological beliefs and normative attitudes shape adoption, trust, and regulation. This research highlights important contrasts between earlier information and communication technologies and today’s AI, showing how issues of autonomy, fairness, and control fuel public anxieties about societal change.',
    imageSrc: '/images/ChatGPT Image Oct 1, 2025 at 02_38_09 PM.png',
    imageAlt: 'Visual collage illustrating AI perception research',
    works: [
      {
        content: (
          <>
            <span className="font-semibold">Novozhilova, E.</span>, Mays, K., Paik, S., & Katz, J. E. (2024). More capable,
            less benevolent: trust perceptions of AI systems across societal contexts.{' '}
            <span className="italic">Machine Learning and Knowledge Extraction</span>, 6(1), 342-366.
          </>
        ),
        href: 'https://www.mdpi.com/2504-4990/6/1/17',
      },
      {
        content: (
          <>
            <span className="font-semibold">Novozhilova, E.</span>, Mays, K., & Katz, J. E. (2024). Looking towards an automated
            future: US attitudes towards future artificial intelligence instantiations and their effect.{' '}
            <span className="italic">Humanities and Social Sciences Communications</span>, 11(1), 1-11.
          </>
        ),
        href: 'https://www.nature.com/articles/s41599-024-02625-1',
      },
    ],
  },
  {
    title: 'Carry-Over Effects of Human–AI Interaction on Human–Human Interaction',
    description:
      'I investigate how experiences with AI agents influence subsequent communication with other people. While much research in human–AI interaction focuses on immediate responses to technology, my work extends this inquiry to its downstream effects on interpersonal behavior. Using real-time interactions with LLM-based chatbots, I study whether AI encounters foster prosocial or antisocial tendencies, with mind perception as a key mechanism. This line of research offers both theoretical and practical insights for designing AI systems that strengthen human relationships.',
    imageSrc: '/images/ChatGPT Image Oct 1, 2025 at 02_42_49 PM.png',
    imageAlt: 'Illustration of human and AI dialogue influencing people',
    works: [
      {
        content: (
          <>
            <span className="font-semibold">Novozhilova, E.</span>, Cummings, J. Carry-over effects from human-AI to human-human
            interaction: The mediating role of mind perception. [in preparation]
          </>
        ),
      },
      {
        content: (
          <>
            Nair, J., <span className="font-semibold">Novozhilova, E.</span>. Role of chatbot personality and communicational
            context on user conformity. [in preparation]
          </>
        ),
      },
    ],
  },
  {
    title: 'Communicative AI Design and Policy for Human Wellbeing',
    description:
      'Building on findings about public perceptions and interaction effects, I develop guidelines for conversational AI that promote ethical and prosocial outcomes. My research emphasizes a human-centered approach to design, asking which capabilities support wellbeing and which may create harm or dependency. I also examine how policy frameworks can better account for AI companions and emerging social technologies, providing evidence-based recommendations for developers, regulators, and educators.',
    imageSrc: '/images/ChatGPT Image Oct 1, 2025 at 02_50_15 PM.png',
    imageAlt: 'Diagram representing ethical AI design and policy',
    works: [
      {
        content: (
          <>
            <span className="font-semibold">Novozhilova, E.</span>, Vu C., Katz, J. From Moral Panic to Normalization: Comparing
            Users and Non-Users of AI Companionship Apps. (<span className="italic">AI & Society</span>, under review).
          </>
        ),
      },
      {
        content: (
          <>
            Paik, S., Bonna, S., <span className="font-semibold">Novozhilova, E.</span>, Gao, G., Kim, J., Wijaya, D., Betke, M.
            (2023, September). The affective nature of generative news images: Impact on visual journalism.{' '}
            <span className="italic">Affective Computing + Intelligent Interaction (ACII)</span> Conference of the Association
            for the Advancements of Affective Computing (AAAC). MIT Media Lab, Cambridge, MA, USA.
          </>
        ),
        href: 'https://link.springer.com/chapter/10.1007/978-3-031-92648-8_5',
      },
    ],
  },
];

const ResearchPage = () => (
  <div className="px-6">
    <div className="mx-auto max-w-proseWide py-20 space-y-16">
      {researchAreas.map((area, idx) => (
        <article
          key={area.title}
          className={`space-y-6 rounded-lg border border-slate-200 bg-white px-8 py-8 shadow-sm animate-fade-in-slow transition-all duration-500 hover:shadow-lg hover:scale-[1.01] hover:border-slate-300 ${
            idx === 0 ? '' : idx === 1 ? 'animate-delay-200' : 'animate-delay-400'
          }`}
        >
          <div className={`grid gap-6 lg:items-start ${idx === 1 ? 'lg:grid-cols-[1fr_auto]' : 'lg:grid-cols-[auto_1fr]'}`}>
            {idx === 1 ? (
              <>
                <div className="space-y-5">
                  <h2 className="text-3xl font-medium text-primary leading-tight">{area.title}</h2>
                  <p className="text-lg text-slateInk/75 leading-relaxed">{area.description}</p>
                </div>
                <img src={area.imageSrc} alt={area.imageAlt} className="h-48 w-48 rounded object-cover transition-transform duration-500 hover:scale-105" />
              </>
            ) : (
              <>
                <img src={area.imageSrc} alt={area.imageAlt} className="h-48 w-48 rounded object-cover transition-transform duration-500 hover:scale-105" />
                <div className="space-y-5">
                  <h2 className="text-3xl font-medium text-primary leading-tight">{area.title}</h2>
                  <p className="text-lg text-slateInk/75 leading-relaxed">{area.description}</p>
                </div>
              </>
            )}
          </div>
          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-sm font-medium uppercase tracking-widest text-slateInk/50">Selected Works</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-base text-slateInk/75 leading-relaxed">
              {area.works.map((work, index) => (
                <li key={index}>
                  {work.href ? (
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slateInk/75 hover:text-primary transition-all duration-300 hover:underline"
                    >
                      {work.content}
                    </a>
                  ) : (
                    work.content
                  )}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default ResearchPage;
