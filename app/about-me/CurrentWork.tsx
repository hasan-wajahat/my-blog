import CurrentWorkCarousel from './CurrentWorkCarousel';

const CurrentWork = () => {
  return (
    <section className="flex gap-x-12">
      <div className="flex-1">
        <h2 className="mb-6 text-2xl font-bold">Current Body of Work</h2>
        <p className="my-4">
          Having worked with startups and enterprises, I have had the chance to
          build projects from scratch and also work on legacy code-bases.
          Currently, I am working as a Senior Developer at&nbsp;
          <a
            className="font-bold underline"
            href="https://sematext.com/"
            target="_blank"
          >
            Sematext
          </a>
          &nbsp;developing their web monitoring platform:
          &quot;Synthetics&quot;.
        </p>
        <p className="my-4">
          Prior to this, I worked as a Senior Frontend Engineer at&nbsp;
          <a
            className="font-bold underline"
            href="https://www.interaction-design.org/"
            target="_blank"
          >
            Interaction Design Foundation
          </a>
          &nbsp;where it was my job to modernize all the frontend aspects of
          their platform.
        </p>
        <p className="my-4">
          Before this, I worked as part of the core development team at&nbsp;
          <a
            className="font-bold underline"
            href="https://www.equisfinancial.com/"
            target="_blank"
          >
            Equis Financial
          </a>
          , a major player in the insurance industry. During my time there I
          successfully upgraded their platform and created multiple applications
          to assist their agents in their day to day work.
        </p>
      </div>
      <CurrentWorkCarousel />
    </section>
  );
};

export default CurrentWork;
