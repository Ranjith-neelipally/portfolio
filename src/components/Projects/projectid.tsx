import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PortfolioContext } from "../../context/PortfolioContext";

function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { portfolio, loading } = useContext(PortfolioContext);

  // Reset scroll to top on mount
  useEffect(() => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      rootEl.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <span className="font-mono-x text-xs uppercase tracking-[0.18em] text-foreground">
          Loading<span className="ml-1 cursor-blink text-accent">▌</span>
        </span>
      </div>
    );
  }

  const project = portfolio?.projects.find((p) => p.no === projectId);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground">
        <h1 className="font-display text-4xl text-accent sm:text-5xl">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">The project with ID "{projectId}" could not be found.</p>
        <Link
          to="/"
          className="mt-8 font-mono-x text-xs uppercase tracking-[0.18em] text-foreground border border-border px-4 py-2 hover:bg-foreground hover:text-background transition"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12 sm:px-10 lg:px-16 animate-page-enter">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-12">
          <Link
            to="/"
            className="font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-accent transition"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <header className="border-b border-border pb-8 mb-12">
          <div className="flex items-center gap-3 font-mono-x text-xs uppercase tracking-[0.2em] text-accent mb-4">
            <span>№ {project.no}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.status}</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6">
            {project.name}
          </h1>
          <p className="text-xl sm:text-2xl italic text-muted-foreground font-display max-w-3xl">
            {project.tagline}
          </p>
        </header>

        <div className="grid grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-mono-x text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Overview
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
              {project.blurb}
            </p>
          </div>

          {/* Details Sidebar */}
          <div className="col-span-12 lg:col-span-4 border-t border-border lg:border-t-0 lg:border-l lg:border-border lg:pl-10 pt-12 lg:pt-0">
            <div className="space-y-8">
              <div>
                <h3 className="font-mono-x text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Role
                </h3>
                <p className="text-sm text-foreground">{project.role}</p>
              </div>

              <div>
                <h3 className="font-mono-x text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Stack
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono-x text-[11px] uppercase tracking-[0.15em] bg-surface text-foreground border border-border px-2.5 py-1 rounded"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {project.href && (
                <div className="pt-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center font-mono-x text-xs uppercase tracking-[0.18em] bg-accent text-accent-foreground font-semibold px-5 py-3 hover:opacity-90 transition"
                  >
                    Visit Project →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
