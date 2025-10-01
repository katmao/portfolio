import { useEffect } from 'react';

const CV_PATH = '/documents/ekaterina-novozhilova-cv.pdf';

const CvRedirectPage = () => {
  useEffect(() => {
    window.location.replace(CV_PATH);
  }, []);

  return (
    <div className="px-6">
      <div className="mx-auto max-w-proseWide py-32 text-center text-slateInk/80">
        <p className="text-xs uppercase tracking-[0.45em] text-slateInk/60">Opening CV</p>
        <h1 className="mt-4 text-3xl font-semibold text-primary">Redirecting to CV</h1>
        <p className="mt-4 text-base">
          Your download should begin automatically. If it does not,{' '}
          <a className="text-primary underline" href={CV_PATH}>
            click here to open the CV PDF.
          </a>
        </p>
      </div>
    </div>
  );
};

export default CvRedirectPage;
