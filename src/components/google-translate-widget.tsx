"use client";

import { useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "hi", label: "हिन्दी", name: "Hindi" },
  { code: "mr", label: "मराठी", name: "Marathi" },
] as const;

type LangCode = (typeof LANGUAGES)[number]["code"];

function getInitialLanguage(): LangCode {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/([^/]+)\/([^;]+)/);
  if (match && match[2]) {
    const code = match[2].toLowerCase() as LangCode;
    if (LANGUAGES.some((l) => l.code === code)) {
      return code;
    }
  }
  return "en";
}

function setCookie(name: string, value: string, days?: number) {
  let expires = "";
  if (days !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  const domain = window.location.hostname;
  document.cookie = `${name}=${value}${expires}; path=/;`;
  document.cookie = `${name}=${value}${expires}; path=/; domain=${domain};`;
}

function loadGoogleTranslateScript(onInit: () => void) {
  if (window.google?.translate?.TranslateElement) {
    onInit();
    return;
  }

  window.googleTranslateElementInit = () => {
    new window.google!.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi,mr",
        autoDisplay: false,
      },
      "google_translate_element"
    );
    onInit();
  };

  const existingScript = document.querySelector(
    'script[src*="translate.google.com/translate_a/element.js"]'
  );
  if (!existingScript) {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }
}

export function GoogleTranslateWidget() {
  const [currentLang, setCurrentLang] = useState<LangCode>(getInitialLanguage);

  const handleLanguageChange = (langCode: LangCode) => {
    if (langCode === currentLang) return;

    setCurrentLang(langCode);

    if (langCode === "en") {
      setCookie("googtrans", "", -1);
      window.location.reload();
      return;
    }

    setCookie("googtrans", `/en/${langCode}`);

    loadGoogleTranslateScript(() => {
      const select = document.querySelector<HTMLSelectElement>(
        "#google_translate_element select.goog-te-combo"
      );
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <div className="flex items-center">
      {/* Hidden container for Google Translate element */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Sleek Segmented Language Switcher */}
      <div
        className="inline-flex items-center rounded-full border border-gray-200 bg-white/95 p-0.5 shadow-xs backdrop-blur-xs max-w-full"
        role="group"
        aria-label="Language selection"
      >
        {LANGUAGES.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`rounded-full px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold transition-all duration-150 leading-none ${
                isActive
                  ? "bg-[#134063] text-white shadow-xs"
                  : "text-gray-600 hover:text-[#0A1B33] hover:bg-gray-100/80"
              }`}
              title={lang.name}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default GoogleTranslateWidget;
