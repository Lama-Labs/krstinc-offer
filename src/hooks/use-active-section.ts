"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  "povzetek",
  "vratar",
  "kotlovnice",
  "crm",
  "vloge",
  "faze",
  "cena",
  "naslednji-koraki",
] as const;

export type SectionId = (typeof SECTIONS)[number];

export { SECTIONS };

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("povzetek");

  useEffect(() => {
    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            visibleIds.add(e.target.id);
          } else {
            visibleIds.delete(e.target.id);
          }
        }

        // pick the first section (in document order) that is currently visible
        const next = SECTIONS.find((id) => visibleIds.has(id));
        if (next) {
          setActive(next);
        }
      },
      { threshold: 0.05, rootMargin: "-80px 0px -40% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
