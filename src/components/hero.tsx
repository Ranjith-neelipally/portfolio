import { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import Marquee from './Marquee';

function Hero() {
  const { portfolio } = useContext(PortfolioContext);

  const experienceList = portfolio?.experience || [];
  const projectsList = portfolio?.projects || [];

  // 1. Calculate years of experience
  let startYear = new Date().getFullYear();
  if (experienceList.length > 0) {
    let minYear = Infinity;
    experienceList.forEach((e) => {
      const match = e.years.match(/^(\d{4})/);
      if (match) {
        const y = parseInt(match[1], 10);
        if (y < minYear) minYear = y;
      }
    });
    if (minYear !== Infinity) {
      startYear = minYear;
    }
  }
  const yearsOfExp = Math.max(0, new Date().getFullYear() - startYear - 1);

  // 2. Total projects delivered
  const totalProjects = projectsList.length;

  // 3. Enterprise products count
  const enterpriseCount = projectsList.filter((p) =>
    p.status.toLowerCase().includes("enterprise")
  ).length;

  // 4. Personal projects in flight
  const personalCount = projectsList.filter(
    (p) =>
      p.role.toLowerCase().includes("founder") ||
      p.role.toLowerCase().includes("creator") ||
      p.role.toLowerCase().includes("solo")
  ).length;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 gap-6 px-6 pb-24 pt-20 sm:px-10 sm:pt-28 lg:pb-36 lg:pt-36">
        <div className="col-span-12 lg:col-span-2">
          <div className="font-mono-x text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <div>Index №01</div>
            <div className="mt-1">Vol. 03 · 2026</div>
            <div className="mt-6 hidden h-px w-12 bg-accent lg:block" />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-10">
          <p className="font-mono-x text-xs uppercase tracking-[0.22em] text-accent">
            <span>// currently building · researchpal</span>
            <span className="ml-1 cursor-blink">▌</span>
          </p>

          <h1 className="font-display mt-6 text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] text-foreground">
            I build <em className="italic text-accent">products</em>,
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">not </span>
            résumés.
          </h1>

          <div className="mt-12 grid grid-cols-12 gap-6">
            <p className="col-span-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:col-span-8">
              I'm <span className="text-foreground">Ranjith</span> — a full
              stack developer with three years of building enterprise web and
              mobile applications, and a habit of shipping my own ideas on the
              side. I care about useful products, simple systems, and the part
              of the work that happens between the obvious and the boring.
            </p>

            <div className="col-span-12 md:col-span-4">
              <div className="border-l border-hairline pl-5 font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <div className="text-foreground">Workshop log</div>
                <ul className="mt-3 space-y-1.5 normal-case tracking-normal">
                  <li>· {yearsOfExp || 3}+ years building</li>
                  <li>· {totalProjects || 15}+ projects delivered</li>
                  <li>· {enterpriseCount || 4}+ enterprise products</li>
                  <li>· {personalCount || 2} of my own, in flight</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

export default Hero;