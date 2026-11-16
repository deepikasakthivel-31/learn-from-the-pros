import { describe, expect, it } from "vitest";

import { filterProfessionals, FREE_MESSAGE_LIMIT } from "@/lib/marketplace";

describe("Skills Exchange preview business rules", () => {
  it("sets the learner's complimentary message allowance to five", () => {
    expect(FREE_MESSAGE_LIMIT).toBe(5);
  });

  it("filters professional search results by profession, language, and experience together", () => {
    const results = filterProfessionals({
      skill: "Data science",
      language: "Tamil",
      experience: "5+ years",
    });

    expect(results.map((professional) => professional.name)).toEqual(["Arjun Menon"]);
  });
});