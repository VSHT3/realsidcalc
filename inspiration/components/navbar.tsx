"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  label: string;
  dropdown?: DropdownItem[];
}

const navLinks: NavItem[] = [
  { href: "#o-mne", label: "O Mně" },
  {
    label: "Finanční Kalkulačky",
    dropdown: [
      { href: "/kalkulacky/hypoteka", label: "Hypoteční kalkulačka" },
      { href: "/kalkulacky/sporeni", label: "Spořicí kalkulačka" },
      { href: "/kalkulacky/investice", label: "Investiční kalkulačka" },
      { href: "/kalkulacky/duchod", label: "Důchodová kalkulačka" },
    ],
  },
  { href: "/financni-diagnostika", label: "Finanční Diagnostika" },
  {
    label: "Produkty",
    dropdown: [
      { href: "/produkty/pojisteni", label: "Pojištění" },
      { href: "/produkty/investice", label: "Investice" },
      { href: "/produkty/uvery", label: "Úvěry" },
      { href: "/produkty/sporeni", label: "Spoření" },
    ],
  },
  { href: "/zamestnanecke-benefity", label: "Zaměstnanecké Benefity" },
  { href: "/investovani-do-nemovitosti", label: "Investování do Nemovitostí" },
  { href: "/automatizace-firemnich-procesu", label: "Automatizace Firemních Procesů" },
  { href: "/likvidace-pojistnych-udalosti", label: "Likvidace Pojistných Událostí" },
];

function DropdownMenu({ items, isOpen }: { items: DropdownItem[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-1 pointer-events-none"
      }`}
    >
      <div className="bg-[#141d2b]/98 backdrop-blur-xl border border-[var(--gold)]/15 rounded-xl overflow-hidden shadow-2xl shadow-black/50 min-w-[210px]">
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-3 text-sm text-muted-foreground hover:text-[var(--gold)] hover:bg-[var(--gold)]/5 transition-all duration-150 ${
              i < items.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 mr-3 flex-shrink-0" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-[#0d1520]/95 backdrop-blur-xl shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Top strip: logo + contact CTA */}
      <div
        className={`border-b transition-colors duration-400 ${
          isScrolled ? "border-white/5" : "border-white/0"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image
              src="https://assets.kovacsebastian.com/transpfavicon.png"
              alt="Sebastián Kováč logo"
              width={32}
              height={32}
              style={{ width: 32, height: 32 }}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-base font-semibold tracking-wide text-foreground group-hover:text-[var(--gold)] transition-colors duration-200">
              Sebastián<span className="text-[var(--gold)]">.</span>
            </span>
          </Link>

          {/* Desktop: phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+420771516683"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors duration-200"
            >
              <Phone size={14} className="text-[var(--gold)]" />
              +420 771 516 683
            </a>
            <Link
              href="#kontakt"
              className="px-5 py-2 bg-[var(--gold)] text-[var(--navy-dark)] text-sm font-semibold rounded-full hover:bg-[var(--gold-light)] transition-all duration-200 hover:shadow-lg hover:shadow-[var(--gold)]/25 hover:scale-105"
            >
              Kontaktujte mě
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-foreground hover:text-[var(--gold)] transition-colors"
            aria-label="Otevřít menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop full nav row */}
      <div className="hidden lg:block border-b border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-11">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 h-full px-2 xl:px-3 text-[11.5px] xl:text-[12.5px] font-medium tracking-wide transition-colors duration-200 whitespace-nowrap border-b-2 border-transparent hover:border-[var(--gold)] hover:text-[var(--gold)] ${
                        openDropdown === link.label
                          ? "text-[var(--gold)] border-[var(--gold)]"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <DropdownMenu items={link.dropdown} isOpen={openDropdown === link.label} />
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="h-full flex items-center px-2 xl:px-3 text-[11.5px] xl:text-[12.5px] font-medium tracking-wide text-muted-foreground hover:text-[var(--gold)] transition-colors duration-200 whitespace-nowrap border-b-2 border-transparent hover:border-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-[#0d1520]/98 backdrop-blur-xl ${
          isMobileMenuOpen ? "max-h-[85vh]" : "max-h-0"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col gap-1 overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full flex items-center justify-between text-muted-foreground hover:text-[var(--gold)] transition-colors py-3 px-3 rounded-lg hover:bg-[var(--gold)]/5 text-sm"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        mobileDropdowns.includes(link.label) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDropdowns.includes(link.label) ? "max-h-60" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 pb-2 space-y-0.5">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 py-2.5 px-3 text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors rounded-lg hover:bg-[var(--gold)]/5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--gold)]/50 flex-shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href || "#"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-[var(--gold)] transition-colors py-3 px-3 rounded-lg hover:bg-[var(--gold)]/5"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+420771516683"
              className="flex items-center gap-2 text-sm text-muted-foreground px-3"
            >
              <Phone size={14} className="text-[var(--gold)]" />
              +420 771 516 683
            </a>
            <Link
              href="#kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-[var(--gold)] text-[var(--navy-dark)] text-center text-sm font-semibold rounded-full hover:bg-[var(--gold-light)] transition-all duration-200"
            >
              Kontaktujte mě
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
