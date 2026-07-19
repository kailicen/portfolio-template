import { motion } from "framer-motion";
import SectionIntro from "./ui/SectionIntro";
import NavigationCard from "./ui/NavigationCard";

const funeralPages = [
  {
    title: "Planning",
    href: "/having-a-funeral-with-solace/planning-a-funeral",
    eyebrow: "Plan ahead",
    description:
      "Guidance around wishes, advance care planning, funeral planning and practical choices.",
  },
  {
    title: "Home Funerals in Tasmania",
    href: "/having-a-funeral-with-solace/home-funerals-in-tasmania",
    eyebrow: "Family-led care",
    description:
      "Explore home funerals, home vigils, family-led care and how Solace can support you.",
  },
];

export default function HavingAFuneral() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-solace-canvas px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="Having a Funeral with Solace"
        title="Support for planning, choice and family-led funerals."
        description="Whether you are planning ahead or need support now, explore practical guidance and family-led funeral options to help you understand what is possible."
      />

      <div className="mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-2">
        {funeralPages.map((page, index) => (
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
