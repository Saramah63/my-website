"use client";

import { useEffect, useMemo, useState } from "react";

const PHRASES = [
  "structured digital products",
  "human-centered systems",
  "emotionally intelligent products",
];

const FALLBACK_TEXT = "I build structured digital products and human-centered systems.";
const LONGEST_PHRASE = "emotionally intelligent products";

export default function TypingHeroHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const currentPhrase = useMemo(() => PHRASES[phraseIndex], [phraseIndex]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const typingDelay = isDeleting ? 44 : 56;
    const pauseDelay = 1400;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % PHRASES.length);
        return;
      }

      setDisplayedText(
        isDeleting
          ? currentPhrase.slice(0, Math.max(0, displayedText.length - 1))
          : currentPhrase.slice(0, displayedText.length + 1)
      );
    }, !isDeleting && displayedText === currentPhrase ? pauseDelay : typingDelay);

    return () => window.clearTimeout(timeout);
  }, [currentPhrase, displayedText, isDeleting, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <h1 className="founderDisplay">{FALLBACK_TEXT}</h1>;
  }

  return (
    <h1 className="founderDisplay founderDisplayTyping">
      <span className="srOnly">{FALLBACK_TEXT}</span>
      <span className="founderTypingIntro" aria-hidden="true">
        I build
      </span>
      <span className="founderTypingLine" aria-hidden="true">
        <span className="founderTypingMeasure">{LONGEST_PHRASE}</span>
        <span className="founderTypingAnimated">
          <span>{displayedText}</span>
          <span className="founderTypingCursor" />
        </span>
      </span>
      <span className="founderTypingOutro" aria-hidden="true">
        that turn complexity into usable systems.
      </span>
    </h1>
  );
}
