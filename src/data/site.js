import partygem from "../assets/partygem.webp";
import hackernewsclone from "../assets/hackernewsclone.webp";
import rightshubClip from "../assets/rightshub.mp4";
import rightshubPoster from "../assets/rightshub-poster.webp";
import restroomfinderClip from "../assets/restroomfinder.mp4";
import restroomfinderPoster from "../assets/restroomfinder-poster.webp";

export const profile = {
  name: "Kevin Wang",
  role: "Senior Software Engineer",
  location: "Available for remote work",
  email: "kcwang06@gmail.com",
  resume:
    "https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/view?usp=sharing",
  hero:
    "I build healthcare analytics products at Cormac, and I’m founding PartyGem — an event platform with RSVP and Stripe-powered ticketing.",
  aboutTitle: "Healthcare analytics at Cormac, and PartyGem",
  summary: [
    "I’m a Senior Software Engineer at Cormac Corporation, where I build healthcare analytics applications that support CMS programs. I’m also the founder of PartyGem, an event platform with RSVP flows and Stripe-powered ticketing.",
    "I work across the stack — React, TypeScript, Node.js, Python, and SQL at work, and Go, HTMX, PostgreSQL, and Stripe on PartyGem. I completed a degree in electrical engineering.",
  ],
};

export const social = [
  {
    label: "GitHub",
    href: "https://github.com/NinjaEagle",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kwangpro/",
  },
  {
    label: "Medium",
    href: "https://medium.com/@kwang06",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skillCategories = [
  "Programming Languages",
  "Front-End",
  "Back-End",
  "Software",
  "Development Practices",
];

export const skills = [
  { name: "Javascript (ES6+)", group: "Programming Languages" },
  { name: "Ruby", group: "Programming Languages" },
  { name: "TypeScript", group: "Programming Languages" },
  { name: "Python3", group: "Programming Languages" },
  { name: "Go", group: "Programming Languages" },
  { name: "ReactJS", group: "Front-End" },
  { name: "Next.js", group: "Front-End" },
  { name: "Redux", group: "Front-End" },
  { name: "React Native", group: "Front-End" },
  { name: "Material UI", group: "Front-End" },
  { name: "HTML5", group: "Front-End" },
  { name: "CSS3", group: "Front-End" },
  { name: "HTMX", group: "Front-End" },
  { name: "NodeJS", group: "Back-End" },
  { name: "Express", group: "Back-End" },
  { name: "Firebase", group: "Back-End" },
  { name: "Ruby on Rails", group: "Back-End" },
  { name: "MongoDB", group: "Back-End" },
  { name: "SQL Server", group: "Back-End" },
  { name: "PostgreSQL", group: "Back-End" },
  { name: "Stripe", group: "Back-End" },
  { name: "GitHub Actions", group: "Software" },
  { name: "Docker", group: "Software" },
  { name: "Figma", group: "Software" },
  { name: "JIRA", group: "Software" },
  { name: "Alteryx", group: "Software" },
  { name: "PowerBi", group: "Software" },
  { name: "Tableau", group: "Software" },
  { name: "Adobe Photoshop", group: "Software" },
  { name: "Git", group: "Software" },
  { name: "RESTful API", group: "Development Practices" },
  { name: "Agile", group: "Development Practices" },
  { name: "NPM", group: "Development Practices" },
  { name: "Webpack", group: "Development Practices" },
  { name: "TDD", group: "Development Practices" },
  { name: "CI/CD", group: "Development Practices" },
  { name: "Jest", group: "Development Practices" },
  { name: "Playwright", group: "Development Practices" },
];

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Cormac Corporation",
    location: "Remote",
    dates: "May 2025 – Present",
    bullets: [
      "Build healthcare analytics for CMS programs across LTCH and Hospice, helping hundreds of internal stakeholders track patient outcomes, provider performance, and operational metrics",
      "Ship reusable React and TypeScript components for filtering, drill-down, and self-service exploration, cutting duplicated UI by 30%",
      "Build backend reporting with Node.js, Python, SQL, and Pug.js, generating thousands of compliance and audit reports each quarter",
      "Optimize SQL against millions of records, speeding report generation by 25–40%",
      "Ship through CI/CD and biweekly production releases in an Agile environment",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "KPMG",
    location: "NY",
    dates: "June 2022 – March 2024",
    bullets: [
      "Built full-stack TypeScript, React, Node.js, and AWS apps for financial services clients, increasing adoption and satisfaction by 25%",
      "Designed analytics pipelines and Power BI dashboards, reducing reporting latency by 30%",
      "Partnered on UI/UX in Figma, increasing engagement by 30%",
      "Led project management with daily scrums, sprint planning, and JIRA, keeping milestones on time",
    ],
  },
  {
    title: "Software Engineer",
    company: "Craft Worldwide",
    location: "NY",
    dates: "May 2021 – June 2022",
    bullets: [
      "Built the NY Lottery SPA with Next.js, React, and Redux, reaching 2,000+ signups",
      "Used Next.js SSR and SSG to improve SEO and load times on that site",
      "Built REST APIs with Node.js and SQL, improving data retrieval by 20%",
      "Added caching and lazy loading, making page loads 15% faster",
    ],
  },
];

export const projects = [
  {
    name: "PartyGem",
    status: "Startup in progress",
    info: "My startup: an event platform with RSVP flows and Stripe-powered ticketing. I’m focused on a reliable purchase path, tiered tickets, and clear organizer vs attendee UX on phone and desktop.",
    technologies: ["Go", "HTMX", "PostgreSQL", "Stripe", "Playwright"],
    img: partygem,
    live: "https://partygemai.com",
    featured: true,
  },
  {
    name: "HackerNews Clone",
    info: "Lets users post articles and upvote or comment on other posts, similar to Hacker News.",
    technologies: ["React", "Firebase", "HTML", "CSS", "Bootstrap"],
    img: hackernewsclone,
    github: "https://github.com/bbdavidbb/hackernewsclone",
    live: "https://michigan-hackernewsclone.netlify.app/",
  },
  {
    name: "RightsHub",
    info: "Educates the public about incidents of death from police in their area through data visualizations, and about their rights.",
    technologies: ["React", "Node.js", "Leaflet", "HTML", "CSS", "Bootstrap"],
    clip: rightshubClip,
    poster: rightshubPoster,
    github: "https://github.com/hackforblacklivesmatter-5-1/rightshub",
    live: "https://rightshub.netlify.app/",
  },
  {
    name: "NYC Restroom Locator",
    info: "View and filter restrooms on a map, then save them to a list to visit later.",
    technologies: ["React", "Ruby on Rails", "PostgreSQL", "Heroku", "Bootstrap"],
    clip: restroomfinderClip,
    poster: restroomfinderPoster,
    github: "https://github.com/NinjaEagle/nyc-restroom-locator-frontend",
    githubBackEnd: "https://github.com/NinjaEagle/nyc-restroom-finder-backend",
    live: "https://ninjaeagle.github.io/nyc-restroom-locator-frontend",
  },
];
