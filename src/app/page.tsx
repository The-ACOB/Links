import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Globe2,
  Trophy,
  UsersRound,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const links = [
  {
    title: "Website",
    href: "https://theacob.com",
    icon: Globe2,
    featured: true,
    kind: "website",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/the.acobd",
    icon: FaFacebookF,
    kind: "facebook",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/the.acobd",
    icon: FaInstagram,
    kind: "instagram",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@appliedcognitiobd",
    icon: FaYoutube,
    kind: "youtube",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/appliedcognitiobd",
    icon: FaLinkedinIn,
    kind: "linkedin",
  },
  {
    title: "Olympiads",
    href: "https://theacob.com/olympiads",
    icon: Trophy,
    featured: true,
    kind: "olympiads",
  },
  {
    title: "Resources",
    href: "https://theacob.com/resources",
    icon: BookOpen,
    kind: "resources",
  },
  {
    title: "Join our team",
    href: "https://theacob.com/ambassadors",
    icon: UsersRound,
    kind: "team",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topline" aria-label="ACOB">
        <a href="https://theacob.com" aria-label="ACOB official website">
          ACOB
        </a>
        <span>LINKS</span>
      </header>

      <div className="main-grid">
        <section className="hero-column" aria-labelledby="main-title">
          <a
            className="logo-wrap"
            href="https://theacob.com"
            aria-label="Visit ACOB website"
          >
            <Image
              src="/assets/acob-logo.png"
              alt="ACOB"
              width={220}
              height={70}
              priority
              className="logo"
            />
          </a>
          <span className="brand-rule" />
          <p className="eyebrow">APPLIED COGNITIO OLYMPIAD BANGLADESH</p>
          <div className="intro">
            <h1 id="main-title">
              Curiosity over <em>memorisation.</em>
            </h1>
            <p className="intro-copy">All things ACOB, in one place.</p>
          </div>
        </section>

        <section
          className="links-column"
          aria-label="Official ACOB destinations"
        >
          <nav className="links" aria-label="ACOB links">
            {links.map(({ title, href, icon: Icon, featured, kind }, index) => (
              <a
                key={title}
                className={`link-card${featured ? " featured" : ""} link-${kind}`}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                style={{ "--i": index } as React.CSSProperties}
              >
                <span className="link-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="link-title">{title}</span>
                <span className="link-arrow" aria-hidden="true">
                  <ArrowUpRight strokeWidth={1.6} />
                </span>
              </a>
            ))}
          </nav>
        </section>
      </div>

      <footer className="footer">
        <span>
          Curiosity over <em>memorisation.</em>
        </span>
        <span>© 2026 ACOB · BANGLADESH</span>
      </footer>
    </main>
  );
}
