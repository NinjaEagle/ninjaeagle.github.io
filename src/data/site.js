import hackernewsclone from "../assets/hackernewsclone.png";
import rightshub from "../assets/rightshub.gif";
import restroomfinder from "../assets/restroomfinder.gif";
import restaurantjourney from "../assets/restaurantjourney.gif";

export const profile = {
  name: "Kevin Wang",
  role: "Full Stack Developer",
  location: "Available for remote work",
  email: "kcwang06@gmail.com",
  resume:
    "https://docs.google.com/document/d/1bKWJr-YGZ-OuUAfWtDJYiyBT9Rxj0Z4VX0N--u4w7x0/edit?usp=sharing",
  summary: [
    "I write software full time at a company that develops products, and I care about shipping work people can actually use. I’m also building PartyGem, my startup: an event platform with RSVP flows and Stripe-powered ticketing.",
    "I work across the stack — React, Node.js, Ruby on Rails, and PostgreSQL, and on PartyGem I use Go, HTMX, PostgreSQL, and Stripe. Curiosity about blogs and electronics led me to complete a degree in electrical engineering.",
  ],
};

export const social = [
  {
    label: "GitHub",
    href: "https://github.com/NinjaEagle",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-wang-06/",
  },
  {
    label: "Medium",
    href: "https://medium.com/@kwang06",
  },
  {
    label: "X",
    href: "https://twitter.com/kevlyoko",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  { name: "HTML5", group: "Interface" },
  { name: "CSS3", group: "Interface" },
  { name: "JavaScript", group: "Interface" },
  { name: "React", group: "Interface" },
  { name: "Redux", group: "Interface" },
  { name: "HTMX", group: "Interface" },
  { name: "Node.js", group: "Platform" },
  { name: "Ruby on Rails", group: "Platform" },
  { name: "Go", group: "Platform" },
  { name: "PostgreSQL", group: "Platform" },
  { name: "Firebase", group: "Platform" },
  { name: "Stripe", group: "Platform" },
  { name: "Git", group: "Workflow" },
  { name: "Playwright", group: "Workflow" },
];

export const projects = [
  {
    name: "PartyGem",
    status: "Startup in progress",
    info: "My startup: an event platform with RSVP flows and Stripe-powered ticketing. I’m focused on a reliable purchase path, tiered tickets, and clear organizer vs attendee UX on phone and desktop.",
    technologies: ["Go", "HTMX", "PostgreSQL", "Stripe", "Playwright"],
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
    img: rightshub,
    github: "https://github.com/hackforblacklivesmatter-5-1/rightshub",
    live: "https://rightshub.netlify.app/",
  },
  {
    name: "NYC Restroom Locator",
    info: "View and filter restrooms on a map, then save them to a list to visit later.",
    technologies: ["React", "Ruby on Rails", "PostgreSQL", "Heroku", "Bootstrap"],
    img: restroomfinder,
    github: "https://github.com/NinjaEagle/nyc-restroom-locator-frontend",
    githubBackEnd: "https://github.com/NinjaEagle/nyc-restroom-finder-backend",
    live: "https://ninjaeagle.github.io/nyc-restroom-locator-frontend",
  },
  {
    name: "Restaurant Journey",
    info: "A click-through game: pick restaurants in each borough and try to get through all five without getting sick.",
    technologies: ["React", "Ruby on Rails", "PostgreSQL", "Heroku", "Bootstrap"],
    img: restaurantjourney,
    github: "https://github.com/NinjaEagle/restaurant-journey-app-frontend",
    githubBackEnd: "https://github.com/Franchely/restaurant-journey-app-backend",
    video: "https://www.youtube.com/watch?v=jIzeiSOjo-s&t=2s",
    live: "https://ninjaeagle.github.io/restaurant-journey-app-frontend",
  },
];
