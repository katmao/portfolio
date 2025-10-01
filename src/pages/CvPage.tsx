const CV_PATH = '/documents/ekaterina-novozhilova-cv.pdf';

const CvPage = () => (
  <div className="px-6">
    <div className="mx-auto max-w-proseWide py-24">
      <h1 className="text-3xl font-semibold text-primary">Curriculum Vitae</h1>
      <p className="mt-4 text-base text-slateInk/80">
        Download and review the current version of my CV using the link below.
      </p>
      <div className="mt-8">
        <a
          href={CV_PATH}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary/80"
        >
          Ekaterina Novozhilova CV
        </a>
      </div>
    </div>
  </div>
);

export default CvPage;
