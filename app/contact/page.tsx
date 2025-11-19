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
    <AnimatedSection className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold sm:text-3xl">Get in touch</h1>

      <p className="text-muted-foreground">
        Have a question or want to work together? I'd love to hear from you.
      </p>

      <AnimatedSection delay={0.15} component="div">
        <ContactForm />
      </AnimatedSection>
    </AnimatedSection>
  );
}
