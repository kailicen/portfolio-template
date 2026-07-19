import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import SectionIntro from "@/components/ui/SectionIntro";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Contact"
        title="Need support or have a question?"
        description="If something is time sensitive, please don’t wait. Send us a message and we will get back to you as soon as possible."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mt-12 flex w-full justify-center"
      >
        <ContactForm compact />
      </motion.div>
    </section>
  );
}
