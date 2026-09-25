import { profile } from "../data/site.js";
import portrait from "../assets/kevin-portrait.jpg";
import portraitWebp from "../assets/kevin-portrait.webp";
import { useInView } from "../hooks/useInView.js";

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="section" ref={ref}>
      <div className={visible ? "container split reveal in" : "container split reveal"}>
        <figure className="portrait">
          <picture>
            <source srcSet={portraitWebp} type="image/webp" />
            <img
              src={portrait}
              alt={`${profile.name} portrait`}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>
        <div>
          <p className="eyebrow">About</p>
          <h2>{profile.aboutTitle}</h2>
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
