import { profile } from "../data/site.js";
import { IconArrow } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="eyebrow">Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-copy">{profile.hero}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects <IconArrow />
          </a>
          <a className="button button-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
