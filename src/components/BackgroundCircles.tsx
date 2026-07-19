import { motion } from "framer-motion";

const circleSizes = ["clamp(280px, 42vw, 440px)", "clamp(520px, 72vw, 760px)"];

export default function BackgroundCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {circleSizes.map((size, index) => (
        <motion.div
          key={size}
          className="absolute rounded-full border border-white/8"
          style={{
            width: size,
            height: size,
          }}
          animate={{
            scale: [1, 1.008, 1],
            opacity: [0.22, 0.32, 0.22],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.6,
          }}
        />
      ))}
    </div>
  );
}
