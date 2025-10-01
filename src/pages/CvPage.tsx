const CV_PATH = 'https://drive.google.com/file/d/1jtWmq-W_Lzm-GfHm7tbBCn16wyNZlYcs/view?usp=sharing';

const CvPage = () => (
  <div className="px-6">
    <div className="mx-auto max-w-proseWide py-24">
      <h1 className="text-4xl font-medium text-primary animate-fade-in">Curriculum Vitae</h1>
      <p className="mt-6 text-lg text-slateInk/75 leading-relaxed animate-fade-in animate-delay-100">
        Download and review the current version of my CV using the link below.
      </p>
      <div className="mt-10 animate-fade-in animate-delay-200">
        <a
          href={CV_PATH}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-8 py-4 text-base font-medium text-primary shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:scale-105"
        >
          Ekaterina Novozhilova CV
        </a>
      </div>
    </div>
  </div>
);

export default CvPage;
