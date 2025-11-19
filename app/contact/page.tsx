import { Metadata } from "next";

import AnimatedSection from "@/components/section/AnimatedSection";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Got questions, feedback, or just want to say hello? I'd love to hear from you!",
};

export default function Contact() {
  return (
    <AnimatedSection>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Get in touch</h1>
        <p className="text-muted-foreground leading-relaxed">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>

      <AnimatedSection delay={0.15} component="div" className="mt-6">
        <ContactForm />
      </AnimatedSection>
    </AnimatedSection>
  );
}
