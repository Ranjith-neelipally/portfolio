import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

function Tools() {
  const { portfolio, loading } = useContext(PortfolioContext);

  if (loading) {
    return null;
  }

  const tools = portfolio?.tools || [];

  return (
    <section className="border-b border-border bg-surface/30">
      <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono-x text-xs uppercase tracking-[0.22em] text-accent">
              // toolbelt
            </div>
            <p className="mt-4 max-w-sm text-muted-foreground">
              The tools I happen to be holding. Not the point — but here, since
              you asked.
            </p>
          </div>
          <ul className="col-span-12 flex flex-wrap gap-x-6 gap-y-2 font-mono-x text-base text-foreground/85 lg:col-span-8">
            {tools.map((t, i) => (
              <li key={t} className="flex items-baseline gap-6">
                <span>{t}</span>
                {i < tools.length - 1 && (
                  <span className="text-muted-foreground/50">/</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tools;
