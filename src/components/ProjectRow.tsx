import { Link } from "react-router-dom";
import { IProject } from "../context/PortfolioContext";

function ProjectRow({
  project,
  flip,
}: {
  project: IProject;
  flip: boolean;
}) {
  return (
    <article className="group relative grid grid-cols-12 gap-6 border-t border-border py-12 lg:py-16">
      <div className={`col-span-12 lg:col-span-2 ${flip ? "lg:order-3" : ""}`}>
        <div className="flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-1">
          <span className="font-mono-x text-xs uppercase tracking-[0.2em] text-accent">
            № {project.no}
          </span>
          <span className="font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.year}
          </span>
        </div>
      </div>

      <div
        className={`col-span-12 lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-4" : ""}`}
      >
        <h3 className="font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
          <Link
            to={`/project/${project.no}`}
            className="transition hover:text-accent"
          >
            {project.name}
          </Link>
          <span className="text-muted-foreground"> — </span>
          <em className="italic text-accent">{project.tagline}</em>
        </h3>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.blurb}
        </p>
        <div className="mt-6 font-mono-x text-xs uppercase tracking-[0.18em] text-foreground/80">
          {project.role}
        </div>
      </div>

      <div className={`col-span-12 lg:col-span-3 ${flip ? "lg:order-1" : ""}`}>
        <div className="border-l border-hairline pl-5">
          <div className="font-mono-x text-xs uppercase tracking-[0.2em] text-muted-foreground">
            status
          </div>
          <div className="mt-2 text-sm text-foreground">{project.status}</div>

          <div className="mt-6 font-mono-x text-xs uppercase tracking-[0.2em] text-muted-foreground">
            built with
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground/85">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProjectRow;