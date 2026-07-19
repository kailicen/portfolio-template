// components/ui/ImageContentSection.tsx

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";

type ImageContentSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  reverse?: boolean;
  background?: "white" | "canvas";
  imageClassName?: string;
};

export default function ImageContentSection({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  children,
  reverse = false,
  background = "white",
  imageClassName = "",
}: ImageContentSectionProps) {
  const backgroundClass =
    background === "canvas" ? "bg-solace-canvas" : "bg-white";

  return (
    <section
      className={`flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8 ${backgroundClass}`}
    >
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={reverse ? "lg:order-2" : ""}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            className={`mx-auto w-full max-w-md rounded-2xl border border-solace-100 object-cover shadow-[0_14px_35px_rgba(51,64,57,0.08)] ${imageClassName}`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`rounded-2xl border border-solace-200 bg-solace-surface p-6 shadow-[0_16px_40px_rgba(51,64,57,0.07)] md:p-8 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
