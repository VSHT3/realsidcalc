import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[var(--navy-medium)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="#"
            className="text-xl font-serif tracking-wide text-foreground hover:text-[var(--gold)] transition-colors"
          >
            Sebastián<span className="text-[var(--gold)]">.</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#o-mne" className="hover:text-[var(--gold)] transition-colors">
              O mně
            </Link>
            <Link href="#proc-ja" className="hover:text-[var(--gold)] transition-colors">
              Proč já
            </Link>
            <Link href="#recenze" className="hover:text-[var(--gold)] transition-colors">
              Recenze
            </Link>
            <Link href="#kontakt" className="hover:text-[var(--gold)] transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sebastián Kováč. Všechna práva vyhrazena.
          </p>
        </div>

        {/* SMS Finance attribution */}
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-muted-foreground">
            Finanční poradce pod záštitou{" "}
            <span className="text-[var(--gold)]">SMS Finance</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
