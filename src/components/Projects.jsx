import { projects } from "../data/site.js";
import { IconExternal } from "./Icons.jsx";
import { useInView } from "../hooks/useInView.js";

function ProjectCard({ project }) {
  return (
    <article className={project.featured ? "project-card featured" : "project-card"}>
      {project.img ? (
        <div className="project-media">
          <img src={project.img} alt="" loading="lazy" />
        </div>
      ) : (
        <div className="project-media placeholder" aria-hidden="true">
          <span>{project.name}</span>
        </div>
      )}
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

  return (
    <section id="projects" className="section" ref={ref}>
      <div className={visible ? "container reveal in" : "container reveal"}>
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
