"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, Target, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Důvěra a transparentnost",
    description:
      "Vždy jednám otevřeně a v nejlepším zájmu svých klientů. Žádné skryté poplatky, žádné překvapení.",
  },
  {
    icon: Target,
    title: "Individuální přístup",
    description:
      "Každý klient je jedinečný. Vytvářím strategie na míru vašim cílům, možnostem a životní situaci.",
  },
  {
    icon: Award,
    title: "Profesionální expertise",
    description:
      "Certifikovaný poradce s rozsáhlým vzděláním a neustálým profesním rozvojem v oblasti financí.",
  },
  {
    icon: Users,
    title: "Dlouhodobé partnerství",
    description:
      "Nejde jen o jednorázovou konzultaci. Jsem tu pro vás v každé fázi vaší finanční cesty.",
  },
];

export function WhyChooseMe() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="proc-ja" className="py-24 md:py-32 bg-[var(--navy-dark)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] mb-4">
            Proč spolupracovat se mnou
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Hodnoty, na kterých{" "}
            <span className="text-[var(--gold)]">stavím</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  feature: (typeof features)[number];
  index: number;
  isInView: boolean;
}

function FeatureCard({ feature, index, isInView }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className={`group p-8 bg-[var(--navy-light)] rounded-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--gold)]/5 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-[var(--gold)]" />
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
