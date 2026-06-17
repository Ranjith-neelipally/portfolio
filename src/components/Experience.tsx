import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Experience() {
  const { portfolio, loading } = useContext(PortfolioContext);

  if (loading) {
    return null;
  }

  const experience = portfolio?.experience || [];

  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono-x text-xs uppercase tracking-[0.22em] text-accent">
              // past
            </div>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[1] text-foreground">
              Where I've
              <br />
              <em className="italic text-muted-foreground">been building.</em>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              The short version of the last few years. The long version is the
              projects above.
            </p>
          </div>

          <ol className="col-span-12 lg:col-span-8">
            {experience.map((e, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-4 border-t border-border py-8 first:border-t-0 first:pt-0"
              >
                <div className="col-span-12 sm:col-span-3">
                  <div className="font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {e.years}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="font-display text-2xl text-foreground sm:text-3xl">
                    {e.role}
                    <span className="text-muted-foreground"> · </span>
                    <em className="italic text-accent">{e.org}</em>
                  </div>
                  <p className="mt-2 text-muted-foreground">{e.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
