import { ArrowUpRight, BadgeCheck, CalendarDays, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/marketplace/language-context";
import { getCopy } from "@/lib/localization";
import { currencies, type Professional } from "@/lib/marketplace";

export function MentorCard({ professional, featured = false }: { professional: Professional; featured?: boolean }) {
  const { language } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);

  return (
    <article className={`mentor-card${featured ? " mentor-card-featured" : ""}`}>
      <div className="mentor-card-image-wrap">
        <Link to="/mentors/$mentor" params={{ mentor: professional.slug }} className="mentor-card-image-link" aria-label={`${copy("learnWith")} ${professional.name}`}>
          <img
            className="mentor-card-image"
            src={professional.portrait}
            alt={`${professional.name}, ${professional.profession} mentor`}
            width={816}
            height={816}
            loading="lazy"
          />
        </Link>
        {professional.featured && <span className="mentor-badge"><BadgeCheck size={14} />{copy("sampleLabel")}</span>}
        <span className={`portrait-accent portrait-accent-${professional.accent}`} aria-hidden="true" />
      </div>
      <div className="mentor-card-body">
        <div className="mentor-card-heading">
          <div>
            <Link className="mentor-name" to="/mentors/$mentor" params={{ mentor: professional.slug }}>{professional.name}</Link>
            <p className="mentor-title">{professional.title}</p>
          </div>
          <span className="mentor-rating"><Star size={14} fill="currentColor" />{professional.rating.toFixed(2)} <span>({professional.reviewCount})</span></span>
        </div>
        <p className="mentor-short-bio">{professional.bio}</p>
        <div className="mentor-skills" aria-label={copy("skills")}>
          {professional.skills.slice(0, 3).map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <div className="mentor-languages">
          <span>{professional.languages.slice(0, 2).join(" · ")}</span>
          <span>{professional.experience} {copy("yearsExperience")}</span>
        </div>
        <div className="mentor-card-bottom">
          <div className="mentor-price">
            <strong>₹{currencies.format(professional.monthlyFee)}</strong>
            <span>{copy("perMonth")}</span>
          </div>
          <span className="session-count"><CalendarDays size={14} />{professional.sessions} {copy("sessionsPerMonth")}</span>
          <Button asChild variant="ghost" size="icon" aria-label={`${copy("viewProfile")}: ${professional.name}`} className="mentor-card-link">
            <Link to="/mentors/$mentor" params={{ mentor: professional.slug }}><ArrowUpRight size={18} /></Link>
          </Button>
        </div>
      </div>
    </article>
  );
}