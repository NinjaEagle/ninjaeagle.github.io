import { profile } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="muted">Built with React and Vite</p>
      </div>
    </footer>
  );
}
