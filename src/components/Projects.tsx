import { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import SectionLabel from './SectionLabel';
import ProjectRow from './ProjectRow';

function Projects() {
  const { portfolio, loading } = useContext(PortfolioContext);

  if (loading) {
    return null; // The screen / App layout manages the main loading state
  }

  const projects = portfolio?.projects || [];

  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-32">
        <SectionLabel
          kicker="// the work"
          title={"Things I made because they needed to exist."}
          count={`${projects.length} shown`}
        />

        <div className="mt-20 space-y-0">
          {projects.map((p, i) => (
            <ProjectRow key={p.no} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;