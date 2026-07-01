import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        {[220, 380, 560, 760].map((size, index) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-emerald-400/35"
            style={{
              width: size,
              height: size,
            }}
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.18, 0.34, 0.18],
            }}
            transition={{
              duration: 6 + index * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default BackgroundCircles;
