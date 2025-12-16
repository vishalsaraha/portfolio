// app/animation/useScrollReveal.ts
"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect(); // reveal once
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
