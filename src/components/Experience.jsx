import { experience } from "../data/site.js";
import { useInView } from "../hooks/useInView.js";

export default function Experience() {
  const { ref, visible } = useInView();

  return (
    <section id="experience" className="section" ref={ref}>
      <div className={visible ? "container reveal in" : "container reveal"}>
        <p className="eyebrow">Experience</p>
        <h2>Where I ship products</h2>
        <ol className="experience-list">
          {experience.map((job, index) => (
            <li
              key={`${job.company}-${job.dates}`}
              className="experience-card"
              style={{ "--i": index }}
            >
              <div className="experience-meta">
                <div>
                  <h3>{job.title}</h3>
                  <p className="experience-org">
                    {job.company}
                    <span aria-hidden="true"> · </span>
                    {job.location}
                  </p>
                </div>
                <p className="experience-dates">{job.dates}</p>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
