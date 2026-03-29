"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Contact options */}
      <div
        className={`absolute bottom-16 right-0 mb-2 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          <a
            href="tel:+420771516683"
            className="flex items-center gap-3 px-4 py-3 bg-[var(--navy-light)] rounded-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Zavolat</p>
              <p className="text-sm text-foreground">+420 771 516 683</p>
            </div>
          </a>

          <a
            href="mailto:sebastian.kovac@smsfinance.cz"
            className="flex items-center gap-3 px-4 py-3 bg-[var(--navy-light)] rounded-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Napsat email</p>
              <p className="text-sm text-foreground">Kontaktujte mě</p>
            </div>
          </a>

          <Link
            href="#kontakt"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[var(--gold)] text-[var(--navy-dark)] rounded-lg font-medium hover:bg-[var(--gold-light)] transition-all duration-300 shadow-lg"
          >
            Napsat zprávu
          </Link>
        </div>
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          isOpen
            ? "bg-[var(--navy-light)] border border-[var(--border)]"
            : "bg-[var(--gold)] hover:bg-[var(--gold-light)] hover:shadow-[var(--gold)]/30"
        }`}
        aria-label={isOpen ? "Zavřít kontaktní menu" : "Otevřít kontaktní menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[var(--gold)]" />
        ) : (
          <MessageCircle className="w-6 h-6 text-[var(--navy-dark)]" />
        )}
      </button>
    </div>
  );
}
