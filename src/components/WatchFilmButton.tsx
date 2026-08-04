"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { VimeoEmbed } from "./VimeoEmbed";

export function WatchFilmButton({
  vimeoId,
  title,
}: {
  vimeoId: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-offwhite/40 bg-black/30 backdrop-blur-sm px-5 py-2.5 text-sm text-offwhite hover:bg-offwhite hover:text-black hover:border-offwhite transition-colors cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5v14l11-7z" />
        </svg>
        Watch film
      </button>

      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setOpen(false)}
        >
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-offwhite/70 hover:text-offwhite transition-colors cursor-pointer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <VimeoEmbed idOrUrl={vimeoId} title={title} autoplay />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
