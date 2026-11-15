import ananyaPortrait from "@/assets/professional-ananya.jpg";
import arjunPortrait from "@/assets/professional-arjun.jpg";
import meeraPortrait from "@/assets/professional-meera.jpg";

export const supportedLanguages = [
  "English",
  "Tamil",
  "Hindi",
  "Telugu",
  "Malayalam",
  "Kannada",
] as const;

export const FREE_MESSAGE_LIMIT = 5;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export type Professional = {
  slug: string;
  name: string;
  title: string;
  profession: string;
  experience: number;
  rating: number;
  reviewCount: number;
  monthlyFee: number;
  sessions: number;
  languages: SupportedLanguage[];
  skills: string[];
  bio: string;
  featured: boolean;
  portrait: string;
  accent: "leaf" | "coral" | "sky";
};

export const professionals: Professional[] = [
  {
    slug: "ananya-rao",
    name: "Ananya Rao",
    title: "Senior Software Engineer · Bengaluru",
    profession: "Software development",
    experience: 8,
    rating: 4.98,
    reviewCount: 42,
    monthlyFee: 4800,
    sessions: 8,
    languages: ["English", "Kannada", "Hindi"],
    skills: ["React", "JavaScript", "Web development"],
    bio: "Build real-world web products with a mentor who has shipped software used by millions. Lessons balance fundamentals with thoughtful, hands-on projects.",
    featured: true,
    portrait: ananyaPortrait,
    accent: "leaf",
  },
  {
    slug: "arjun-menon",
    name: "Arjun Menon",
    title: "Data Scientist · Chennai",
    profession: "Data science",
    experience: 6,
    rating: 4.96,
    reviewCount: 36,
    monthlyFee: 4200,
    sessions: 8,
    languages: ["English", "Tamil", "Malayalam"],
    skills: ["Python", "Machine learning", "Data analysis"],
    bio: "Make sense of data from first principles. Arjun teaches Python, practical analysis and the foundations behind confident machine-learning work.",
    featured: true,
    portrait: arjunPortrait,
    accent: "sky",
  },
  {
    slug: "meera-krishnan",
    name: "Meera Krishnan",
    title: "Independent Product Designer · Kochi",
    profession: "Design",
    experience: 9,
    rating: 5.0,
    reviewCount: 29,
    monthlyFee: 3900,
    sessions: 6,
    languages: ["English", "Tamil", "Malayalam"],
    skills: ["UI/UX design", "Figma", "Design systems"],
    bio: "Turn curiosity into a strong design practice. Learn the research, interface and portfolio skills behind products people love to use.",
    featured: true,
    portrait: meeraPortrait,
    accent: "coral",
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma",
    title: "Growth Marketing Lead · Hyderabad",
    profession: "Digital marketing",
    experience: 7,
    rating: 4.93,
    reviewCount: 31,
    monthlyFee: 3600,
    sessions: 6,
    languages: ["English", "Telugu", "Hindi"],
    skills: ["SEO", "Content strategy", "Analytics"],
    bio: "Learn to grow an audience with clear strategy, useful content and measurement that leads to better decisions.",
    featured: false,
    portrait: meeraPortrait,
    accent: "coral",
  },
  {
    slug: "vikram-iyer",
    name: "Vikram Iyer",
    title: "Chartered Accountant · Bengaluru",
    profession: "Accounting",
    experience: 11,
    rating: 4.95,
    reviewCount: 24,
    monthlyFee: 4500,
    sessions: 8,
    languages: ["English", "Kannada", "Tamil"],
    skills: ["Accounting", "Financial planning", "Excel"],
    bio: "Build financial confidence through practical accounting, planning and spreadsheet skills shaped around real business scenarios.",
    featured: false,
    portrait: arjunPortrait,
    accent: "sky",
  },
];

export const skillCategories = [
  "All skills",
  "Software development",
  "Data science",
  "Design",
  "Digital marketing",
  "Accounting",
];

export function findProfessional(slug: string) {
  return professionals.find((professional) => professional.slug === slug);
}

export function filterProfessionals({
  query = "",
  skill = "All skills",
  language = "All languages",
  experience = "Any experience",
}: {
  query?: string;
  skill?: string;
  language?: string;
  experience?: string;
}) {
  const normalizedQuery = query.trim().toLowerCase();

  return professionals.filter((professional) => {
    const matchesQuery =
      !normalizedQuery ||
      [professional.name, professional.title, professional.profession, ...professional.skills]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    const matchesSkill = skill === "All skills" || professional.profession === skill;
    const matchesLanguage =
      language === "All languages" || professional.languages.includes(language as SupportedLanguage);
    const minimumExperience = experience === "5+ years" ? 5 : experience === "8+ years" ? 8 : 0;

    return matchesQuery && matchesSkill && matchesLanguage && professional.experience >= minimumExperience;
  });
}

export const currencies = new Intl.NumberFormat("en-IN");