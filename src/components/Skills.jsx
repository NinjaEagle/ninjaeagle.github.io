import { useEffect, useRef, useState } from "react";
import { skillCategories, skills } from "../data/site.js";
import { useInView } from "../hooks/useInView.js";
import { prefersReducedMotion } from "../hooks/useReducedMotion.js";

const filters = ["All", ...skillCategories];
const FADE_MS = 240;

export default function Skills() {
  const { ref, visible } = useInView();
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);
  const [fading, setFading] = useState(false);
  const [entering, setEntering] = useState(false);
  const fadeTimer = useRef(0);

  const groups = active === "All" ? skillCategories : [active];

  useEffect(() => {
    if (!visible || prefersReducedMotion()) return undefined;

    setEntering(true);
    const timer = window.setTimeout(() => setEntering(false), 700);
    return () => window.clearTimeout(timer);
  }, [visible]);

  useEffect(() => () => window.clearTimeout(fadeTimer.current), []);

  function changeFilter(filter) {
    if (filter === active) return;

    window.clearTimeout(fadeTimer.current);

    if (prefersReducedMotion()) {
      setFading(false);
      setActive(filter);
      return;
    }

    setFading(true);
    fadeTimer.current = window.setTimeout(() => {
      setActive(filter);
      fadeTimer.current = window.setTimeout(() => setFading(false), 30);
    }, FADE_MS);
  }

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className={visible ? "container reveal in" : "container reveal"}>
        <p className="eyebrow">Skills</p>
        <h2>Tools I use to ship</h2>
        <div className="skill-filters" role="group" aria-label="Filter skills by category">
          {filters.map((filter) => {
            const isActive = active === filter;

            return (
              <button
                key={filter}
                type="button"
                className={isActive ? "skill-filter is-active" : "skill-filter"}
                aria-pressed={isActive}
                onClick={() => changeFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div
          className={[
            "skill-groups",
            groups.length === 1 ? "is-single" : "",
            fading ? "is-fading" : "",
            entering ? "is-entering" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {groups.map((group) => (
            <div key={group} className="skill-group">
              <h3>{group}</h3>
              <ul className="skill-pills">
                {skills
                  .filter((skill) => skill.group === group)
                  .map((skill, index) => {
                    const isSelected = selected === skill.name;

                    return (
                      <li key={skill.name} style={{ "--i": index }}>
                        <button
                          type="button"
                          className={isSelected ? "skill-pill is-selected" : "skill-pill"}
                          aria-pressed={isSelected}
                          onClick={() =>
                            setSelected((current) => (current === skill.name ? null : skill.name))
                          }
                        >
                          {skill.name}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
