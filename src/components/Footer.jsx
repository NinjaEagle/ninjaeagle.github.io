import { profile } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          className="footer-resume"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <p className="muted">Built with React and Vite</p>
      </div>
    </footer>
  );
}
