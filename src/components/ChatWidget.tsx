"use client";

import { useEffect, useRef, useState } from "react";
import { Mark } from "./Logo";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hey! I'm Stage Two's assistant. Feel free to ask me about our services, past work, or how to get a quote for your project or simply make yourself at home and look around. We'll be just here.",
};

const AUTO_OPEN_KEY = "s2-chat-auto-opened";
const AUTO_OPEN_DELAY_MS = 10000;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(AUTO_OPEN_KEY)) return;

    const id = setTimeout(() => {
      if (!userInteracted.current) {
        setOpen(true);
        window.localStorage.setItem(AUTO_OPEN_KEY, "1");
      }
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(id);
  }, []);

  function toggleOpen() {
    userInteracted.current = true;
    setOpen((v) => !v);
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError("Couldn't reach the chat right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[min(70svh,32rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-white/10 bg-black shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="font-display text-sm text-offwhite">Stage Two Assistant</p>
            <button
              type="button"
              onClick={() => {
                userInteracted.current = true;
                setOpen(false);
              }}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-full text-offwhite/60 hover:text-offwhite cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "self-end bg-offwhite text-black"
                    : "self-start bg-white/10 text-offwhite"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="self-start rounded-lg bg-white/10 px-3 py-2 text-sm text-offwhite/60">
                Typing…
              </div>
            )}
            {error && (
              <div className="self-start rounded-lg bg-accent/15 px-3 py-2 text-sm text-accent">
                {error}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project..."
              maxLength={1000}
              className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm text-offwhite placeholder:text-offwhite/40 outline-none focus:bg-white/10"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-offwhite text-black transition-opacity disabled:opacity-30 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-offwhite text-black shadow-lg transition-transform hover:scale-105 cursor-pointer"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <Mark variant="black" className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
