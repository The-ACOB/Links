import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, BookOpen, Facebook, Globe2, Instagram, Linkedin, Trophy, UsersRound, Youtube } from "lucide-react";

const links = [
  { title: "Official Website", detail: "Explore ACOB", href: "https://theacob.com", icon: Globe2, featured: true, external: true },
  { title: "Facebook", detail: "News, announcements & events", href: "https://www.facebook.com/appliedcognitiobd", icon: Facebook, external: true },
  { title: "Instagram", detail: "Behind the scenes and updates", href: "https://www.instagram.com/the.acobd", icon: Instagram, external: true },
  { title: "YouTube", detail: "Videos and Inside Excellence", href: "https://www.youtube.com/@appliedcognitiobd", icon: Youtube, external: true },
  { title: "LinkedIn", detail: "Our professional community", href: "https://www.linkedin.com/company/appliedcognitiobd", icon: Linkedin, external: true },
  { title: "Explore Olympiads", detail: "Challenges built around reasoning", href: "https://theacob.com/olympiads", icon: Trophy, featured: true, external: true },
  { title: "Learning Resources", detail: "Guides, materials and more", href: "https://theacob.com/resources", icon: BookOpen, external: true },
  { title: "Join the ACOB Team", detail: "Ambassadors and opportunities", href: "https://theacob.com/ambassadors", icon: UsersRound, external: true },
];

export default function Home() {
  return <main className="page-shell">
    <div className="topline"><span>ACOB / DIGITAL DIRECTORY</span><span>EST. 2025 · BANGLADESH</span></div>
    <header className="brand">
      <a className="logo-wrap" href="https://theacob.com" aria-label="ACOB official website"><Image src="/assets/acob-logo.png" alt="ACOB" width={220} height={70} priority className="logo" /></a>
      <span className="brand-rule" />
      <p className="eyebrow">APPLIED COGNITIO OLYMPIAD BANGLADESH</p>
    </header>
    <section className="intro" aria-labelledby="main-title">
      <p className="section-index"><span /> YOUR CONNECTION TO ACOB</p>
      <h1 id="main-title">Curiosity over<br/><em>memorisation.</em></h1>
      <p className="intro-copy">Every way to connect with ACOB, in one place.</p>
      <div className="intro-meta"><span>THINK · QUESTION · APPLY</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
    <nav className="links" aria-label="ACOB links">
      {links.map(({ title, detail, href, icon: Icon, featured }) => <a key={title} className={`link-card${featured ? " featured" : ""}`} href={href} target="_blank" rel="noreferrer noopener">
        <span className="link-icon"><Icon aria-hidden="true" strokeWidth={1.55}/></span>
        <span className="link-copy"><span className="link-title">{title}</span><span className="link-detail">{detail}</span></span>
        <span className="link-arrow" aria-hidden="true"><ArrowUpRight strokeWidth={1.5}/></span>
      </a>)}
    </nav>
    <section className="note">
      <div className="note-label"><span className="tiny-rule"/> OUR PHILOSOPHY</div>
      <p>A correct answer isn’t the same thing as an understood one.</p>
      <span className="note-mark">Observe <b>→</b> Reason <b>→</b> Apply</span>
    </section>
    <footer className="footer">
      <a href="https://theacob.com" className="footer-wordmark">ACOB <ArrowUpRight size={15} aria-hidden="true"/></a>
      <p>Curiosity over <em>memorisation.</em></p>
      <div className="footer-bottom"><span>© 2026 ACOB · DHAKA, BANGLADESH</span><a href="https://theacob.com" target="_blank" rel="noreferrer noopener">VISIT THE MAIN WEBSITE <ArrowDownRight size={12}/></a></div>
    </footer>
  </main>;
}
