"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Instagram, Menu, X, Youtube } from "lucide-react";
import IconLinks from "../icon-links/IconLinks";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          dot<span className="text-blue-500">🥒</span>dager
        </Link>
        <nav className="hidden md:flex gap-6">
          <Button
            variant="ghost"
            className={`text-white hover:text-blue-500 ${
              activeSection === "about" ? "text-blue-500" : ""
            }`}
            onClick={() => scrollTo("about")}
          >
            Sobre mi
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:text-blue-500 ${
              activeSection === "interests" ? "text-blue-500" : ""
            }`}
            onClick={() => scrollTo("interests")}
          >
            Mis intereses
          </Button>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <IconLinks href="https://www.youtube.com/@DotDager" size="icon">
            <Youtube className="h-5 w-5" />
          </IconLinks>

          <IconLinks href="https://github.com/MarianoVilla" size="icon">
            <Github className="h-5 w-5" />
          </IconLinks>

          <IconLinks href="https://www.instagram.com/dager.32/" size="icon">
            <Instagram className="h-5 w-5" />
          </IconLinks>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Button
                variant="ghost"
                className={`text-white hover:text-blue-500 ${
                  activeSection === "about" ? "text-blue-500" : ""
                }`}
                onClick={() => scrollTo("about")}
              >
                Sobre mi
              </Button>
              <Button
                variant="ghost"
                className={`text-white hover:text-blue-500 ${
                  activeSection === "interests" ? "text-blue-500" : ""
                }`}
                onClick={() => scrollTo("interests")}
              >
                Mis intereses
              </Button>
              <div className="flex justify-center gap-4 mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:text-blue-500"
                >
                  <a
                    href="https://github.com/MarianoVilla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:text-blue-500"
                >
                  <a
                    href="https://www.instagram.com/dager.32/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:text-blue-500"
                >
                  <a
                    href="https://www.youtube.com/@DotDager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
