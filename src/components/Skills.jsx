import { skills } from "../data/site.js";
import { useInView } from "../hooks/useInView.js";

const groups = [...new Set(skills.map((skill) => skill.group))];

export default function Skills() {
  const { ref, visible } = useInView();

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className={visible ? "container reveal in" : "container reveal"}>
        <p className="eyebrow">Skills</p>
        <h2>Tools I use to ship</h2>
        <div className="skill-groups">
          {groups.map((group) => (
            <div key={group} className="skill-group">
              <h3>{group}</h3>
              <ul>
                {skills
                  .filter((skill) => skill.group === group)
                  .map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
