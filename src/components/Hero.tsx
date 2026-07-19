import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import SolaceLogo from "./brand/SolaceLogo";
import ButtonLink from "./ui/ButtonLink";

export const heroVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      className="
        relative min-h-[calc(100svh-76px)] overflow-hidden
        bg-hero-background bg-cover bg-center
      "
    >
      {/* Keep the photo visible while providing enough contrast */}
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/5
          via-transparent
          to-black/40
        "
      />

      <BackgroundCircles />

      <div
        className="
          relative z-10 flex min-h-[calc(100svh-76px)]
          items-center justify-center
          px-4 py-14 text-center
          sm:px-6
        "
      >
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="
            flex w-full max-w-3xl
            -translate-y-2
            flex-col items-center
          "
        >
          <SolaceLogo
            variant="light"
            priority
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 540px, 620px"
            className="
              w-full max-w-[420px]
              sm:max-w-[520px]
              md:max-w-[600px]
            "
          />

          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            <ButtonLink href="/contact" className="min-w-[155px]">
              Contact Solace
            </ButtonLink>

            <ButtonLink
              href="/having-a-funeral-with-solace"
              variant="outline"
              className="
                min-w-[155px]
                border-white/60
                bg-solace-surface/95
                text-solace-700
                shadow-sm
                backdrop-blur-sm
                hover:border-white
                hover:bg-white
              "
            >
              Funeral Support
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
