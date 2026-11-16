import { BookOpen, ChevronDown, Compass, Menu, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/marketplace/language-context";
import { getCopy } from "@/lib/localization";
import { supportedLanguages } from "@/lib/marketplace";

const languageLabels = ["English", "தமிழ்", "हिंदी", "తెలుగు", "മലയാളം", "ಕನ್ನಡ"];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand-lockup" aria-label="Skills Exchange home">
          <span className="brand-mark"><Sparkles size={17} strokeWidth={2.1} /></span>
          <span>skills<span className="brand-word-accent">exchange</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}>{copy("browseMentors")}</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </nav>
        <div className="header-actions">
          <Select value={language} onValueChange={(value) => setLanguage(value as typeof language)}>
            <SelectTrigger className="language-trigger" aria-label={copy("language")}>
              <BookOpen size={15} aria-hidden="true" />
              <SelectValue />
              <ChevronDown size={13} aria-hidden="true" />
            </SelectTrigger>
            <SelectContent>
              {supportedLanguages.map((item, index) => (
                <SelectItem key={item} value={item}>{languageLabels[index]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button asChild className="header-join">
            <Link to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}><Compass size={15} />{copy("exploreSkills")}</Link>
          </Button>
          <Link to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }} className="mobile-menu" aria-label={copy("browseMentors")}>
            <Menu size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link to="/" className="brand-lockup footer-brand">
          <span className="brand-mark"><Sparkles size={15} /></span>
          <span>skills<span className="brand-word-accent">exchange</span></span>
        </Link>
        <p>Good work grows when it’s shared.</p>
        <nav aria-label="Footer navigation">
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <span className="footer-note">© 2026 Skills Exchange · Preview</span>
      </div>
    </footer>
  );
}