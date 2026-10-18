import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  CirclePlay,
  Globe2,
  MessageCircle,
  Trophy,
  UsersRound,
} from "lucide-react";

const links = [
  { title: "Official Website", detail: "Explore ACOB", href: "https://theacob.com", icon: Globe2, featured: true },
  { title: "Facebook", detail: "News, announcements & events", href: "https://www.facebook.com/appliedcognitiobd", icon: MessageCircle },
  { title: "Instagram", detail: "Behind the scenes and updates", href: "https://www.instagram.com/the.acobd", icon: Camera },
  { title: "YouTube", detail: "Videos and Inside Excellence", href: "https://www.youtube.com/@appliedcognitiobd", icon: CirclePlay },
  { title: "LinkedIn", detail: "Our professional community", href: "https://www.linkedin.com/company/appliedcognitiobd", icon: BriefcaseBusiness },
  { title: "Explore Olympiads", detail: "Challenges built around reasoning", href: "https://theacob.com/olympiads", icon: Trophy, featured: true },
  { title: "Learning Resources", detail: "Guides, materials and more", href: "https://theacob.com/resources", icon: BookOpen },
  { title: "Join the ACOB Team", detail: "Ambassadors and opportunities", href: "https://theacob.com/ambassadors", icon: UsersRound },
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
            {links.map(({ title, detail, href, icon: Icon, featured }, index) => (
              <a key={title} className={`link-card${featured ? " featured" : ""}`} href={href} target="_blank" rel="noreferrer noopener">
                <span className="link-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="link-icon"><Icon aria-hidden="true" strokeWidth={1.55} /></span>
                <span className="link-copy"><span className="link-title">{title}</span><span className="link-detail">{detail}</span></span>
                <span className="link-arrow" aria-hidden="true"><ArrowUpRight strokeWidth={1.5} /></span>
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
