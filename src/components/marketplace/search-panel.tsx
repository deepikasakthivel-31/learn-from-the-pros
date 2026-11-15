import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/marketplace/language-context";
import { getCopy } from "@/lib/localization";
import { skillCategories, supportedLanguages } from "@/lib/marketplace";

export function SearchPanel({ initialQuery = "", compact = false }: { initialQuery?: string; compact?: boolean }) {
  const [query, setQuery] = useState(initialQuery);
  const [skill, setSkill] = useState("All skills");
  const [language, setLanguage] = useState("All languages");
  const [experience, setExperience] = useState("Any experience");
  const navigate = useNavigate();
  const { language: uiLanguage } = useLanguage();
  const copy = (key: Parameters<typeof getCopy>[1]) => getCopy(uiLanguage, key);

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await navigate({ to: "/browse", search: { q: query, skill, language, experience } });
    window.setTimeout(() => document.getElementById("mentor-results")?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
  }

  return (
    <form className={`search-panel${compact ? " search-panel-compact" : ""}`} onSubmit={handleSearch}>
      <label className="search-field search-query-field">
        <span className="search-field-icon"><Search size={18} /></span>
        <span className="search-field-copy">
          <span>{copy("searchLabel")}</span>
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy("searchPlaceholder")} aria-label={copy("searchLabel")} />
        </span>
      </label>
      <label className="search-field search-select-field">
        <span className="search-field-icon"><SlidersHorizontal size={17} /></span>
        <span className="search-field-copy">
          <span>{copy("skillLabel")}</span>
          <Select value={skill} onValueChange={setSkill}>
            <SelectTrigger aria-label={copy("skillLabel")}><SelectValue /></SelectTrigger>
            <SelectContent>
              {skillCategories.map((category) => <SelectItem value={category} key={category}>{category === "All skills" ? copy("allSkills") : category}</SelectItem>)}
            </SelectContent>
          </Select>
        </span>
      </label>
      <label className="search-field search-select-field experience-field">
        <span className="search-field-icon"><span className="experience-glyph">+</span></span>
        <span className="search-field-copy">
          <span>Experience</span>
          <Select value={experience} onValueChange={setExperience}>
            <SelectTrigger aria-label="Experience"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Any experience">Any experience</SelectItem>
              <SelectItem value="5+ years">5+ years</SelectItem>
              <SelectItem value="8+ years">8+ years</SelectItem>
            </SelectContent>
          </Select>
        </span>
      </label>
      <label className="search-field search-select-field">
        <span className="search-field-icon"><span className="language-glyph">文</span></span>
        <span className="search-field-copy">
          <span>{copy("languageLabel")}</span>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger aria-label={copy("languageLabel")}><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="All languages">{copy("allLanguages")}</SelectItem>
              {supportedLanguages.map((item) => <SelectItem value={item} key={item}>{item}</SelectItem>)}
            </SelectContent>
          </Select>
        </span>
      </label>
      <Button type="submit" className="search-submit"><span>{copy("search")}</span><ArrowRight size={16} /></Button>
    </form>
  );
}