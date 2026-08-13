"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/types/portfolio";
import { useToastContext } from "@/contexts/ToastContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";
import AnimatedButton from "@/components/AnimatedButton";

const ContactSection = () => {
  const { addToast } = useToastContext();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    addToast({
      message: t("toast.contactInDev"),
      type: "info",
      duration: 6000,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rafaelmenegheti51@gmail.com",
      href: "mailto:rafaelmenegheti51@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+55 (16) 99465-3737",
      href: "tel:+5516994653737",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Franca - SP, BR",
      href: "https://maps.google.com/?q=Franca,SP",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/rafamenegheti", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rafael-menegheti-4532a0219",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="section-pad relative z-10">
      <div className="container-page">
        <Reveal>
          <div className="glass-panel p-6 sm:p-10 md:p-12">
            <p className="section-label">04 / contact/</p>
            <h2 className="heading-display mb-3 text-3xl text-glow sm:text-4xl md:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mb-10 max-w-2xl font-mono text-sm text-muted">
              {t("contact.description")}
            </p>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 font-mono text-sm text-fg">
                  {t("contact.sendMessage")}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted"
                      >
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder={t("contact.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted"
                      >
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder={t("contact.emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder={t("contact.subjectPlaceholder")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-muted"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder={t("contact.messagePlaceholder")}
                    />
                  </div>

                  <AnimatedButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    icon={
                      isSubmitting ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )
                    }
                  >
                    {isSubmitting
                      ? t("contact.sending")
                      : `-> ${t("contact.sendButton")}`}
                  </AnimatedButton>
                </form>
              </div>

              <div>
                <h3 className="mb-6 font-mono text-sm text-fg">
                  {t("contact.letsConnect")}
                </h3>

                <div className="mb-10 space-y-3">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-panel flex items-center gap-4 p-4 transition-colors hover:border-[var(--accent)]"
                    >
                      <info.icon className="h-4 w-4 flex-shrink-0 text-muted" />
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                          {info.label}
                        </p>
                        <p className="font-mono text-sm text-fg">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {t("contact.followMe")}
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-muted transition-all hover:border-[var(--accent)] hover:text-fg"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>

                <p className="mt-8 font-mono text-sm text-muted">
                  send me a letter!{" "}
                  <a
                    href="mailto:rafaelmenegheti51@gmail.com"
                    className="link-glow"
                  >
                    rafaelmenegheti51@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
