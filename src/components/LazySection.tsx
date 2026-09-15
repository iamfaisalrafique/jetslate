"use client";

import React, { useRef, useState, useEffect } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  /** Pixels before viewport to start loading (default 200) */
  rootMargin?: string;
  /** Minimum height placeholder to prevent CLS (default "100px") */
  minHeight?: string;
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Lightweight IntersectionObserver wrapper that defers rendering of children
 * until the section scrolls within `rootMargin` of the viewport.
 * 
 * This prevents below-fold components from mounting, reducing TBT and initial JS execution.
 */
export default function LazySection({
  children,
  rootMargin = "200px",
  minHeight = "100px",
  className,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver isn't supported, render immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={isVisible ? undefined : { minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}
