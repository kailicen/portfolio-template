import { motion } from "framer-motion";
import SectionIntro from "./ui/SectionIntro";
import NavigationCard from "./ui/NavigationCard";
import ButtonLink from "./ui/ButtonLink";

const educationSubPages = [
  {
    title: "Education & Advocacy",
    href: "/community-education/education-advocacy",
    eyebrow: "Ask away",
    description:
      "Q&A sessions, workshops and honest conversations about dying, death and care.",
  },
  {
    title: "Resources",
    href: "/community-education/resources",
    eyebrow: "Helpful links",
    description:
      "Useful organisations, planning tools, legislation and information to support informed choices.",
  },
  {
    title: "FAQ",
    href: "/community-education/faq",
    eyebrow: "Common questions",
    description:
      "Straightforward answers about dying, death, funerals, rights and options.",
  },
];

export default function CommunityEducation() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Community Education"
        title="Honest conversations make better end-of-life choices possible."
        description="Explore education, advocacy and resources designed to help people feel more informed, prepared and at ease when talking about dying and death."
      />

      <div className="mt-12 grid w-full max-w-6xl gap-6 md:grid-cols-3">
        {educationSubPages.map((page, index) => (
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

      <div className="mt-10">
        <ButtonLink href="/community-education">
          View All Community Education
        </ButtonLink>
      </div>
    </section>
  );
}
