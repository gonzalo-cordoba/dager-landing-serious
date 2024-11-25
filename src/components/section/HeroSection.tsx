"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

import drogerImage3 from "../../../public/droger-7-2.jpg";
import drogerPepi from "../../../public/pep.jpeg";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Mi nombre es Dot Dager ";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-6" {...fadeIn}>
          <motion.div
            variants={typingVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4 h-8"
          >
            {fullText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate={index < displayedText.length ? "visible" : "hidden"}
                transition={{ duration: 0.1 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Full-stack senior
            <span className="block text-blue-500">
              y un gran catador de pepinos
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Soy un creador de contenido al que le encanta la programación, los
            gatos, las guitarras, los pepinos y la filosofía.
          </p>
          <div className="flex gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <a
                href="https://www.instagram.com/dager.32/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactame
              </a>
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              <a
                href="https://github.com/MarianoVilla"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyectos
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative aspect-square"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isHovered ? "pepi" : "profile"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={imageVariants}
              transition={{ duration: 0.15 }}
              className="absolute inset-0"
            >
              <Image
                src={isHovered ? drogerPepi : drogerImage3}
                alt={isHovered ? "Pepi" : "Profile"}
                fill
                className="rounded-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
