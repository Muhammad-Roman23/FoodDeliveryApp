import { motion } from "framer-motion";

export const Banner = ({ title, description, bgImage }) => {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-4 text-gray-200 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
};