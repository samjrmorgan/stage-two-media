"use client";

import { useEffect } from "react";
import { getCurrentLanguage, translatedCodes } from "@/lib/languages";

type TranslateElementCtor = new (
  options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
  elementId: string
) => unknown;

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: { translate?: { TranslateElement?: TranslateElementCtor } };
  }
}

// Google's translator rewrites text nodes, which makes React's later DOM
// updates throw. Making these two calls tolerant keeps navigation working.
function makeDomPatchesTolerant() {
  const removeChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return removeChild.call(this, child) as T;
  };
  const insertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(
    this: Node,
    node: T,
    reference: Node | null
  ): T {
    if (reference && reference.parentNode !== this) return node;
    return insertBefore.call(this, node, reference) as T;
  };
}

export function GoogleTranslate() {
  useEffect(() => {
    if (getCurrentLanguage() === "en") return;

    makeDomPatchesTolerant();
    window.googleTranslateElementInit = () => {
      const Translate = window.google?.translate?.TranslateElement;
      if (!Translate) return;
      new Translate(
        {
          pageLanguage: "en",
          includedLanguages: translatedCodes.join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" translate="no" className="sr-only" />;
}
