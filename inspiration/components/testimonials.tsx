"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Nováková",
    role: "Podnikatelka",
    content:
      "Sebastián mi pomohl zorientovat se ve složitém světě investic. Jeho profesionální přístup a trpělivost jsou obdivuhodné. Doporučuji každému, kdo hledá spolehlivého finančního poradce.",
    rating: 5,
  },
  {
    name: "Jan Procházka",
    role: "IT manažer",
    content:
      "Po letech nejistoty ohledně mých financí jsem konečně našel někoho, komu důvěřuji. Sebastián vytvořil strategii, která dokonale odpovídá mým cílům a možnostem.",
    rating: 5,
  },
  {
    name: "Eva Svobodová",
    role: "Lékařka",
    content:
      "Oceňuji především transparentnost a individuální přístup. Sebastián vždy najde čas vysvětlit vše do detailu a odpovědět na všechny mé otázky.",
    rating: 5,
  },
  {
    name: "Petr Dvořák",
    role: "Architekt",
    content:
      "Díky spolupráci se Sebastiánem jsem dokázal zajistit finanční budoucnost své rodiny. Jeho odbornost a lidský přístup jsou to, co ho odlišuje od ostatních.",
    rating: 5,
  },
  {
    name: "Lucie Horáková",
    role: "Marketingová specialistka",
    content:
      "Sebastián mi pomohl vytvořit investiční portfolio, které odpovídá mému rizikovému profilu. Jeho rady jsou vždy podložené daty a zkušenostmi.",
    rating: 5,
  },
  {
    name: "Tomáš Marek",
    role: "Právník",
    content:
      "Profesionální jednání, jasná komunikace a výborné výsledky. Spolupráce se Sebastiánem překonala má očekávání.",
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="recenze" className="py-24 md:py-32 bg-[var(--navy-medium)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] mb-4">
            Recenze klientů
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Co říkají moji{" "}
            <span className="text-[var(--gold)]">klienti</span>
          </h2>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div
        className={`transition-all duration-1000 delay-300 ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--navy-medium)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--navy-medium)] to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex testimonial-scroll">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  testimonial: (typeof testimonials)[number];
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-[400px] mx-4 p-8 bg-[var(--navy-light)] rounded-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all duration-300">
      {/* Quote icon */}
      <Quote className="w-10 h-10 text-[var(--gold)]/20 mb-4" />

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"
          />
        ))}
      </div>

      {/* Author */}
      <div>
        <p className="font-medium text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  );
}
