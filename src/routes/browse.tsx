import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, SearchX } from "lucide-react";

import { MentorCard } from "@/components/marketplace/mentor-card";
import { useLanguage } from "@/components/marketplace/language-context";
import { SearchPanel } from "@/components/marketplace/search-panel";
import { SiteShell } from "@/components/marketplace/site-shell";
import { getCopy } from "@/lib/localization";
import { filterProfessionals } from "@/lib/marketplace";

export const Route = createFileRoute("/browse")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search["q"] === "string" ? search["q"] : "",
    skill: typeof search["skill"] === "string" ? search["skill"] : "All skills",
    language: typeof search["language"] === "string" ? search["language"] : "All languages",
    experience: typeof search["experience"] === "string" ? search["experience"] : "Any experience",
  }),
  head: () => ({
    meta: [
      { title: "Browse Mentors — Skills Exchange" },
      { name: "description", content: "Browse mentor profiles by skill, experience, and teaching language." },
      { property: "og:title", content: "Browse Mentors — Skills Exchange" },
      { property: "og:description", content: "Browse mentor profiles by skill, experience, and teaching language." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrowsePage,
});

function BrowsePage() {
  const { q, skill, language: teachingLanguage, experience } = Route.useSearch();
  const { language } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(language, key);
  const results = filterProfessionals({ query: q, skill, language: teachingLanguage, experience });

  return (
    <SiteShell>
      <div className="browse-page">
        <div className="browse-crumb"><Link to="/">Skills Exchange</Link><span>/</span><span>{copy("browseMentors")}</span></div>
        <section className="browse-heading">
          <span className="eyebrow"><span className="eyebrow-mark" />{copy("heroKicker")}</span>
          <h1>{copy("mentorSearch")}</h1>
          <p>{copy("mentorSearchDescription")}</p>
        </section>
        <SearchPanel initialQuery={q} compact />
        <section id="mentor-results" className="browse-results">
          <div className="browse-results-header">
            <div><h2>{copy("resultsLabel")} <span>{results.length}</span> {copy("mentorsSuffix")}</h2><p>{copy("allProfilesExample")}</p></div>
            {(q || skill !== "All skills" || teachingLanguage !== "All languages" || experience !== "Any experience") && (
              <Link className="clear-filter-link" to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}>{copy("clearFilters")}</Link>
            )}
          </div>
          {results.length ? (
            <div className="mentor-grid browse-mentor-grid">
              {results.map((professional) => <MentorCard key={professional.slug} professional={professional} featured={professional.featured} />)}
            </div>
          ) : (
            <div className="empty-results"><span><SearchX size={22} /></span><h3>{copy("tryAnotherSearch")}</h3><Link to="/browse" search={{ q: "", skill: "All skills", language: "All languages", experience: "Any experience" }}><ArrowLeft size={14} />{copy("clearFilters")}</Link></div>
          )}
        </section>
      </div>
    </SiteShell>
  );
}