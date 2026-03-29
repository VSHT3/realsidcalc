"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="o-mne" className="py-24 md:py-32 bg-[var(--navy-medium)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--gold)]/3 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Photo */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden group">
                {/* Gold border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] p-[2px]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[var(--navy-dark)]">
                    <Image
                      src="https://assets.kovacsebastian.com/DefinitelyNOTSID.webp"
                      alt="Sebastián Kováč"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                    />
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[var(--gold)]/30 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-[var(--gold)]/20 rounded-lg -z-10" />
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 md:-right-12 bg-[var(--navy-dark)]/95 backdrop-blur-xl border border-[var(--gold)]/10 p-5 rounded-xl shadow-2xl">
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[var(--gold)]">500+</p>
                    <p className="text-xs text-muted-foreground mt-1">klientů</p>
                  </div>
                  <div className="w-px bg-[var(--gold)]/20" />
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[var(--gold)]">10+</p>
                    <p className="text-xs text-muted-foreground mt-1">let praxe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/10 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-[var(--gold)] text-sm font-medium tracking-wide">O mně</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight text-balance">
              Váš partner pro{" "}
              <span className="text-[var(--gold)]">finanční svobodu</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Jsem Sebastián Kováč, certifikovaný finanční poradce s více než desetiletou 
                praxí v oblasti osobních financí a investičního poradenství. Mým posláním 
                je pomáhat lidem dosáhnout jejich finančních cílů prostřednictvím 
                individuálních strategií a dlouhodobého partnerství.
              </p>
              <p>
                Věřím, že kvalitní finanční poradenství by mělo být dostupné každému. 
                Proto přistupuji ke každému klientovi s maximální pozorností a vytvářím 
                řešení šitá na míru jeho konkrétní životní situaci a ambicím.
              </p>
              <p>
                Jako člen týmu SMS Finance mám přístup k širokému portfoliu finančních 
                produktů a nástrojů, které mi umožňují nabídnout vám ta nejlepší možná 
                řešení na trhu.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-[var(--border)] flex items-center gap-6">
              <div>
                <p className="font-serif text-2xl text-[var(--gold)] italic">
                  Sebastián Kováč
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Certifikovaný finanční poradce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
