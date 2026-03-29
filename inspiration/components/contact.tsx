"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Mail, Linkedin, Send, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 771 516 683",
    href: "tel:+420771516683",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sebastian.kovac@smsfinance.cz",
    href: "mailto:sebastian.kovac@smsfinance.cz",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sebastián Kováč",
    href: "https://www.linkedin.com/in/sebastian-kovac",
  },
];

const preferredContactOptions = [
  { value: "phone", label: "Telefon" },
  { value: "email", label: "Email" },
  { value: "any", label: "Jakýkoli" },
];

export function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    preferredContact: "any",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        phone: "",
        email: "",
        preferredContact: "any",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-[var(--navy-dark)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[var(--gold)] text-sm uppercase tracking-[0.2em] mb-4">
            Kontaktujte mě
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Pojďme společně{" "}
            <span className="text-[var(--gold)]">naplánovat</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rádi zodpovím vaše otázky a probereme možnosti spolupráce. 
            První konzultace je vždy nezávazná a zdarma.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Přímý kontakt
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "LinkedIn" ? "_blank" : undefined}
                  rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 bg-[var(--navy-light)] rounded-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors">
                    <method.icon className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-foreground group-hover:text-[var(--gold)] transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business hours */}
            <div className="mt-10 p-6 bg-[var(--navy-light)] rounded-lg border border-[var(--border)]">
              <h4 className="font-medium text-foreground mb-4">Pracovní doba</h4>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Pondělí - Pátek</span>
                  <span className="text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span className="text-foreground">Po domluvě</span>
                </div>
                <div className="flex justify-between">
                  <span>Neděle</span>
                  <span className="text-muted-foreground">Zavřeno</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-8 bg-[var(--navy-light)] rounded-lg border border-[var(--border)]">
              <h3 className="font-serif text-2xl text-foreground mb-8">
                Napište mi
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-[var(--gold)] mb-4" />
                  <h4 className="font-serif text-xl text-foreground mb-2">
                    Děkuji za zprávu!
                  </h4>
                  <p className="text-muted-foreground">
                    Ozvu se vám co nejdříve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--border)] rounded focus:border-[var(--gold)] focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--border)] rounded focus:border-[var(--gold)] focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="+420 123 456 789"
                      />
                    </div>
                  </div>

                  {/* Email & Preferred Contact */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--border)] rounded focus:border-[var(--gold)] focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                        placeholder="jan.novak@email.cz"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="preferredContact"
                        className="block text-sm text-muted-foreground mb-2"
                      >
                        Preferovaný kontakt
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formState.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--border)] rounded focus:border-[var(--gold)] focus:outline-none transition-colors text-foreground"
                      >
                        {preferredContactOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Předmět
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--border)] rounded focus:border-[var(--gold)] focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="O čem chcete diskutovat?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-muted-foreground mb-2"
                    >
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--navy-dark)] border border-[var(--border)] rounded focus:border-[var(--gold)] focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Napište mi, jak vám mohu pomoci..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-[var(--gold)] text-[var(--navy-dark)] font-medium rounded hover:bg-[var(--gold-light)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--gold)]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[var(--navy-dark)]/30 border-t-[var(--navy-dark)] rounded-full animate-spin" />
                        Odesílám...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Odeslat zprávu
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
