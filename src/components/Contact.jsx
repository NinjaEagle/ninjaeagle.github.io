import { profile, social } from "../data/site.js";
import { IconExternal, IconMail } from "./Icons.jsx";
import { useInView } from "../hooks/useInView.js";

export default function Contact() {
  const { ref, visible } = useInView();

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className={visible ? "container contact-inner reveal in" : "container contact-inner reveal"}>
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something</h2>
        <p>
          Email me, grab my resume, or find me on the networks below. I’m available
          for remote work.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.name} at ${profile.email} — opens your email app`}
            title="Opens your email app"
          >
            <IconMail />
            {profile.email}
          </a>
          <a
            className="button button-ghost"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <IconExternal />
          </a>
        </div>
        <p className="contact-hint">
          <IconMail />
          The envelope button opens your default email app with my address filled in.
        </p>
        <ul className="social-list">
          {social.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label} <IconExternal />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
