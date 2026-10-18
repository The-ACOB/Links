import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Globe2,
  Trophy,
  UsersRound,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const links = [
  { title: "Official Website", href: "https://theacob.com", icon: Globe2, featured: true, kind: "website" },
  { title: "Facebook", href: "https://www.facebook.com/appliedcognitiobd", icon: FaFacebookF, kind: "facebook" },
  { title: "Instagram", href: "https://www.instagram.com/the.acobd", icon: FaInstagram, kind: "instagram" },
  { title: "YouTube", href: "https://www.youtube.com/@appliedcognitiobd", icon: FaYoutube, kind: "youtube" },
  { title: "LinkedIn", href: "https://www.linkedin.com/company/appliedcognitiobd", icon: FaLinkedinIn, kind: "linkedin" },
  { title: "Explore Olympiads", href: "https://theacob.com/olympiads", icon: Trophy, featured: true, kind: "olympiads" },
  { title: "Learning Resources", href: "https://theacob.com/resources", icon: BookOpen, kind: "resources" },
  { title: "Join the ACOB Team", href: "https://theacob.com/ambassadors", icon: UsersRound, kind: "team" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="topline">
        <span>ACOB / DIGITAL DIRECTORY</span>
        <span>EST. 2025 · BANGLADESH</span>
      </div>

      <div className="main-grid">
        <section className="hero-column" aria-labelledby="main-title">
          <header className="brand">
            <a className="logo-wrap" href="https://theacob.com" aria-label="ACOB official website">
              <Image src="/assets/acob-logo.png" alt="ACOB" width={220} height={70} priority className="logo" />
            </a>
            <span className="brand-rule" />
            <p className="eyebrow">APPLIED COGNITIO OLYMPIAD BANGLADESH</p>
          </header>

          <div className="intro">
            <p className="section-index"><span /> YOUR CONNECTION TO ACOB</p>
            <h1 id="main-title">Curiosity<br />over <em>memorisation.</em></h1>
            <p className="intro-copy">Every way to connect with ACOB, in one place.</p>
          </div>

          <div className="philosophy">
            <span className="philosophy-label">OUR PHILOSOPHY</span>
            <p>A correct answer isn’t the same thing as an understood one.</p>
            <span className="note-mark">Observe <b>→</b> Reason <b>→</b> Apply</span>
          </div>
        </section>

        <section className="links-column" aria-label="Official ACOB destinations">
          <div className="links-heading">
            <span>OFFICIAL DESTINATIONS</span>
            <span>01 — 08</span>
          </div>
          <nav className="links" aria-label="ACOB links">
            {links.map(({ title, href, icon: Icon, featured, kind }, index) => (
              <a key={title} className={`link-card${featured ? " featured" : ""} link-${kind}`} href={href} target="_blank" rel="noreferrer noopener">
                <span className="link-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="link-icon"><Icon aria-hidden="true" strokeWidth={1.7} /></span>
                <span className="link-title">{title}</span>
                <span className="link-arrow" aria-hidden="true"><ArrowUpRight strokeWidth={1.6} /></span>
              </a>
            ))}
          </nav>
          <p className="links-footnote">THINK <b>·</b> QUESTION <b>·</b> APPLY <span>↗ OPEN A DESTINATION</span></p>
        </section>
      </div>

      <footer className="footer">
        <a href="https://theacob.com" className="footer-wordmark">ACOB <ArrowUpRight size={13} aria-hidden="true" /></a>
        <p>Curiosity over <em>memorisation.</em></p>
        <div className="footer-bottom">
          <span>© 2026 ACOB · DHAKA, BANGLADESH</span>
          <a href="https://theacob.com" target="_blank" rel="noreferrer noopener">VISIT THE MAIN WEBSITE <ArrowUpRight size={11} /></a>
        </div>
      </footer>
    </main>
  );
}
