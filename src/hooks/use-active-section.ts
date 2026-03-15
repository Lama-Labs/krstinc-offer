"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  "povzetek",
  "vratar",
  "kotlovnice",
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
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
