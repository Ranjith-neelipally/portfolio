

function ContactCol({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <>
      <div className="font-mono-x text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 font-display text-2xl text-foreground sm:text-3xl break-words">
        {value}
      </div>
    </>
  );
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
      {href ? (
        <a href={href} className="block transition hover:text-accent">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}

export default ContactCol;
