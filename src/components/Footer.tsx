

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-6 py-8 font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          © {new Date().getFullYear()} Ranjith Neelipally · built, not
          assembled.
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-accent" />
          <span>workshop open · taking on one new thing</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer