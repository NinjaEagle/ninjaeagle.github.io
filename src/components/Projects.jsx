import { useEffect, useRef } from "react";
import { projects } from "../data/site.js";
import { IconExternal } from "./Icons.jsx";
import { useInView } from "../hooks/useInView.js";
import { useReducedMotion } from "../hooks/useReducedMotion.js";

function ProjectMedia({ project, reducedMotion }) {
  const videoRef = useRef(null);

  // Keep playback in sync when the motion preference changes mid-session.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [reducedMotion]);

  if (project.clip) {
    return (
      <div className="project-media">
        <video
          ref={videoRef}
          src={project.clip}
          poster={project.poster}
          aria-label={`${project.name} screen recording`}
          preload="none"
          muted
          loop
          playsInline
          autoPlay={!reducedMotion}
          controls={reducedMotion}
        />
      </div>
    );
  }

  if (project.img) {
    return (
      <div className="project-media">
        <img src={project.img} alt="" loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className="project-media placeholder" aria-hidden="true">
      <span>{project.name}</span>
    </div>
  );
}

function ProjectCard({ project, reducedMotion }) {
  return (
    <article className={project.featured ? "project-card featured" : "project-card"}>
      <ProjectMedia project={project} reducedMotion={reducedMotion} />
      <div className="project-body">
        {project.status || project.featured ? (
          <p className="eyebrow">{project.status || "Featured"}</p>
        ) : null}
        <h3>{project.name}</h3>
        <p>{project.info}</p>
        <ul className="tech-list">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code <IconExternal />
            </a>
          ) : null}
          {project.githubBackEnd ? (
            <a href={project.githubBackEnd} target="_blank" rel="noopener noreferrer">
              API <IconExternal />
            </a>
          ) : null}
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live <IconExternal />
            </a>
          ) : null}
          {project.video ? (
            <a href={project.video} target="_blank" rel="noopener noreferrer">
              Demo <IconExternal />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { ref, visible } = useInView();
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="section" ref={ref}>
      <div className={visible ? "container reveal in" : "container reveal"}>
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
