"use client";

import React, { useState, useEffect, useRef } from "react";
import { Globe, Check } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
  { code: "de", name: "German", nativeName: "Deutsch", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
];

export default function LanguageSelector({ variant = "header" }: { variant?: "header" | "footer" | "mobile" }) {
  const [currentLang, setCurrentLang] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read saved preference from localStorage
    const saved = localStorage.getItem("jetslate_lang");
    if (saved) {
      const match = SUPPORTED_LANGUAGES.find((l) => l.code === saved);
      if (match) {
        setCurrentLang(match);
        document.documentElement.lang = match.code;
        document.documentElement.dir = match.dir;
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const selectLanguage = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    localStorage.setItem("jetslate_lang", lang.code);
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.dir;
    window.dispatchEvent(new CustomEvent("jetslate-language-change", { detail: lang }));
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left" style={{ zIndex: 60 }}>
      <button
        type="button"
        id="language-menu-button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select website language. Currently selected: ${currentLang.name}`}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
        style={{
          background: isOpen ? "#2E2E2E" : "rgba(46, 46, 46, 0.6)",
          borderColor: isOpen ? "#C9A84C" : "#3A3A3A",
          color: "#F8F5EF",
        }}
      >
        <Globe className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />
        <span className="tracking-wider uppercase">{currentLang.code}</span>
        <svg
          className={`w-3 h-3 text-[#E8D6B3] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-labelledby="language-menu-button"
          tabIndex={-1}
          className="absolute right-0 mt-1.5 w-44 rounded-xl border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
          style={{
            background: "#161616",
            borderColor: "#2E2E2E",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(201, 168, 76, 0.2)",
          }}
        >
          <div className="py-1">
            <div className="px-3 py-1.5 text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider border-b border-[#2E2E2E]">
              Select Language
            </div>
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang.code;
              return (
                <button
                  key={lang.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectLanguage(lang)}
                  className="w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors hover:bg-[#2E2E2E] focus-visible:bg-[#2E2E2E] focus-visible:outline-none"
                  style={{
                    color: isSelected ? "#C9A84C" : "#F8F5EF",
                    background: isSelected ? "rgba(201, 168, 76, 0.08)" : "transparent",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-[#E8D6B3]">{lang.nativeName}</span>
                    <span className="text-[11px] text-[#888888]">({lang.name})</span>
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
