
import ContactCol from './ContactCol';

function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-28 sm:px-10 sm:py-40">
        <div className="font-mono-x text-xs uppercase tracking-[0.22em] text-accent">
          // get in touch
        </div>

        <h2 className="font-display mt-6 text-[clamp(2.8rem,8vw,7.5rem)] leading-[0.95] text-foreground">
          Have an idea?
          <br />
          <em className="italic text-muted-foreground">Let's </em>
          <a
            href="mailto:ranjithkumarneelipalli@gmail.com"
            className="italic text-accent underline decoration-accent/40 decoration-2 underline-offset-[0.15em] transition hover:decoration-accent"
          >
            build it.
          </a>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-6 border-t border-border pt-10">
          <ContactCol
            label="email"
            value="ranjithkumarneelipalli@gmail.com"
            href="mailto:ranjithkumarneelipalli@gmail.com"
          />
          <ContactCol
            label="github"
            value="@ranjith"
            href="https://github.com/Ranjith-neelipally"
          />
          <ContactCol
            label="linkedin"
            value="/in/ranjith"
            href="https://www.linkedin.com/in/ranjith-kumar-reddy-neelipally-2b8474250/"
          />
          <ContactCol label="located" value="Hyderabad, IN" />
        </div>
      </div>
    </section>
  );
}

export default Contact