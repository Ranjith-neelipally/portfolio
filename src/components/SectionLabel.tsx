

function SectionLabel({
  kicker,
  title,
  count,
}: {
  kicker: string;
  title: string;
  count?: string;
}) {
  return (
    <div className="grid grid-cols-12 items-end gap-6">
      <div className="col-span-12 lg:col-span-2">
        <div className="font-mono-x text-xs uppercase tracking-[0.22em] text-accent">
          {kicker}
        </div>
        {count && (
          <div className="mt-2 font-mono-x text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {count}
          </div>
        )}
      </div>
      <div className="col-span-12 lg:col-span-10">
        <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1] text-foreground">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default SectionLabel