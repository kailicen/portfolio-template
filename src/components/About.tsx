import { motion } from "framer-motion";
import SectionIntro from "@/components/ui/SectionIntro";
import NavigationCard from "@/components/ui/NavigationCard";

const aboutPages = [
  {
    title: "Who Are We?",
    href: "/about/who-we-are",
    eyebrow: "Our people",
    description:
      "Meet Edwin and Bec, the people behind Solace End of Life Services.",
  },
  {
    title: "How Did We Begin?",
    href: "/about/how-did-we-begin",
    eyebrow: "Our story",
    description:
      "Learn how Solace began and why informed, community-led death care matters.",
  },
];

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center bg-solace-canvas px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="About"
        title="Honest, compassionate support for dying, death and grief."
        description="Learn more about the people, story and purpose behind Solace End of Life Services."
      />

      <div className="mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-2">
        {aboutPages.map((page, index) => (
          <motion.div
            key={page.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <NavigationCard {...page} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
