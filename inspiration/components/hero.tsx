"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current;
      // Clear any existing particles
      particles.innerHTML = '';
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        const isGold = Math.random() > 0.7;
        particle.className = `absolute rounded-full ${
          isGold ? "bg-[var(--gold)]/20" : "bg-white/5"
        }`;
        const size = Math.random() * 80 + 20;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${20 + Math.random() * 20}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * -20}s`;
        particles.appendChild(particle);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[var(--navy-dark)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-[var(--navy-medium)] animate-gradient opacity-60" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--gold)]/8 rounded-full blur-[100px]" />
      </div>
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text */}
          <div>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold)]/10 border border-[var(--gold)]/20 rounded-full mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Sparkles size={14} className="text-[var(--gold)]" />
              <span className="text-[var(--gold)] text-sm font-medium">SMS Finance</span>
            </div>
            
            <h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.1] animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Sebastián
              <br />
              <span className="text-[var(--gold)]">Kováč</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Finanční poradenství nové generace. Pomáhám mladým profesionálům budovat 
              <span className="text-[var(--gold)]"> finanční nezávislost</span> s moderním přístupem.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <Link
                href="#kontakt"
                className="group relative px-8 py-4 bg-[var(--gold)] text-[var(--navy-dark)] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--gold)]/30 hover:scale-105"
              >
                <span className="relative z-10">Začít spolupráci</span>
                <div className="absolute inset-0 bg-[var(--gold-light)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="#o-mne"
                className="px-8 py-4 border border-[var(--gold)]/30 text-foreground font-medium rounded-full hover:border-[var(--gold)] hover:bg-[var(--gold)]/5 transition-all duration-300 text-center"
              >
                Zjistit více
              </Link>
            </div>
            
            {/* Quick stats */}
            <div 
              className="flex gap-8 mt-12 pt-8 border-t border-[var(--gold)]/10 animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              <div>
                <p className="text-3xl font-bold text-[var(--gold)]">500+</p>
                <p className="text-sm text-muted-foreground">spokojených klientů</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--gold)]">10+</p>
                <p className="text-sm text-muted-foreground">let zkušeností</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--gold)]">98%</p>
                <p className="text-sm text-muted-foreground">úspěšnost</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div 
            className="relative hidden lg:flex justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-8 rounded-full border border-[var(--gold)]/10 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute inset-0 -m-16 rounded-full border border-[var(--gold)]/5" />
              
              {/* Main image */}
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-[var(--gold)]/20 shadow-2xl shadow-black/40" style={{ position: "relative" }}>
                <Image
                  src="https://assets.kovacsebastian.com/DefinitelyNOTSID.webp"
                  alt="Sebastián Kováč"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 320px, 384px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)]/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-[var(--navy-dark)]/95 backdrop-blur-xl border border-[var(--gold)]/20 rounded-full shadow-xl">
                <p className="text-sm text-[var(--gold)] font-medium whitespace-nowrap">Certifikovaný finanční poradce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} className="text-[var(--gold)]/60" />
      </div>
    </section>
  );
}
