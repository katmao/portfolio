const sections = [
  {
    heading: 'Instructor of Record',
    roles: [
      {
        title: 'Communication Research Methods (COM CM321)',
        timeframe: 'Fall 2022, Fall 2023',
        details: [
          'Designed and taught the research methods requirement course for Mass Communication, Advertising, Journalism, and Public Relations majors.',
          'Led a cohort of 25 students each semester.',
        ],
      },
      {
        title: 'Mass Communication (Summer High School Program)',
        timeframe: 'Summer 2022, Summer 2023',
        details: [
          'Developed and delivered an accelerated introduction to communication studies for pre-college learners.',
          'Facilitated project-based learning for 25 students per summer session.',
        ],
      },
    ],
  },
  {
    heading: 'Assistant Instructor',
    roles: [
      {
        title: 'Introduction to the World of Communication (COM CO101)',
        timeframe: 'Fall 2021',
        details: [
          'Created lesson plans, led discussion sections, and graded assignments for a 25-student cohort.',
          'Held office hours to support student research and writing.',
        ],
      },
    ],
  },
  {
    heading: 'Teaching Assistant',
    roles: [
      {
        title: 'The Psychology of Emerging Media (COM EM793)',
        timeframe: 'Spring 2023, Spring 2024',
        details: [
          'Supported a graduate lecture of 60 students with lab facilitation and assessment.',
        ],
      },
      {
        title: 'Introduction to Emerging Media Studies (COM EM700)',
        timeframe: 'Fall 2024, Fall 2025',
        details: [
          'Guided project teams and provided feedback for a 60-student graduate seminar.',
        ],
      },
    ],
  },
  {
    heading: 'Mentor',
    roles: [
      {
        title: 'Emerging Media Studies Division Mentorship',
        timeframe: '2021-2025',
        details: [
          'Mentored 17 graduate students in seminar projects and thesis development.',
          'Advised 6 undergraduate researchers in the College of Communication.',
          'Guided 4 high-school students in summer research programs.',
        ],
      },
    ],
  },
];

const TeachingPage = () => (
  <div className="px-6">
    <div className="mx-auto max-w-proseWide py-20 space-y-12">
      {sections.map((section, sectionIdx) => (
        <section key={section.heading} className={`space-y-6 animate-fade-in ${sectionIdx === 0 ? '' : sectionIdx === 1 ? 'animate-delay-100' : sectionIdx === 2 ? 'animate-delay-200' : 'animate-delay-300'}`}>
          <h2 className="text-2xl font-medium text-primary">{section.heading}</h2>
          <div className="space-y-5">
            {section.roles.map((role) => (
              <article key={role.title} className="rounded-lg border border-slate-200 bg-white px-8 py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-slate-300">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-lg font-medium text-primary">{role.title}</h3>
                  <span className="text-sm uppercase tracking-widest text-slateInk/50">{role.timeframe}</span>
                </div>
                <ul className="mt-4 space-y-2 text-base text-slateInk/75 leading-relaxed">
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
);

export default TeachingPage;
