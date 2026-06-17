
import Clock from './clock';

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-3 font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground sm:px-10">
        <div className="flex items-center gap-3">
          <span className="inline-block size-2 rounded-full bg-accent" />
          <span className="text-foreground">Ranjith Neelipally</span>
          <span className="hidden sm:inline">
            — Full Stack Developer · Builder
          </span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#now" className="hover:text-foreground">
            Now
          </a>
          <a href="#experience" className="hover:text-foreground">
            Past
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <div className="hidden text-right sm:block">
          <Clock />
        </div>
      </div>
    </header>
  );
}

export default TopBar