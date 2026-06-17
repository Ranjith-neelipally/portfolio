import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Now() {
  const { portfolio, loading } = useContext(PortfolioContext);

  if (loading) {
    return null;
  }

  const now = portfolio?.now || [];

  return (
    <section id="now" className="border-b border-border bg-surface/30">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono-x text-xs uppercase tracking-[0.22em] text-accent">
              // now
            </div>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,5vw,4.5rem)] leading-[1] text-foreground">
              The current
              <br />
              <em className="italic text-muted-foreground">workbench.</em>
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              A live snapshot of what's open on my desk right now. Updated when
              the desk changes — which is often.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ul className="divide-y divide-border border-y border-border">
              {now.map((line, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-6 py-5 font-mono-x text-sm text-foreground/90"
                >
                  <span className="w-10 shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="text-base sm:text-lg">{line}</span>
                  <span className="ml-auto hidden text-xs uppercase tracking-[0.18em] text-accent sm:inline">
                    open
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground">
              last updated · this week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Now;