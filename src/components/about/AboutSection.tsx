"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Axe, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import drogerImage2 from "../../../public/droger-2.jpg";

export default function AboutSection() {
  const [score, setScore] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const controls = useAnimation();

  const handleAxeClick = async () => {
    if (score < 100) {
      await controls.start({
        rotate: [0, -45, 0],
        transition: { duration: 0.3 },
      });
      setScore((prev) => Math.min(prev + 1, 100));
      setShowInstructions(false);
    }
  };

  const handleReset = () => {
    setScore(0);
    setShowCongrats(false);
    setShowInstructions(true);
  };

  useEffect(() => {
    if (score === 100) {
      setShowCongrats(true);
      setTimeout(() => setShowCongrats(false), 30000);
    }
  }, [score]);

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-b from-blue-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Sobre <span className="text-blue-300">mi</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src={drogerImage2}
              alt="About Me"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-200">
              Hola, soy un creador de contenido con una mente curiosa, siempre
              buscando nuevas formas de superar mis límites. Me encanta explorar
              todo, desde lo más profundo hasta lo más largo, y siempre
              encuentro emoción en cada desafío que me reta a crecer.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <p className="text-blue-300 text-sm">
                Dato curioso como vos: soy un gran admirador de Lumberjack.
                Puntuación actual: {score}
              </p>
              <motion.div
                animate={controls}
                className="cursor-pointer"
                onClick={handleAxeClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Axe className="h-6 w-6 text-blue-300 hover:text-blue-400 transition-colors" />
              </motion.div>
              {score === 100 && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="sm"
                  className="ml-2 text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-black"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reiniciar
                </Button>
              )}
            </div>
            <div className="h-2 w-full bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min((score / 100) * 100, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {showInstructions && (
              <Alert className="bg-gradient-to-r from-blue-600 to-blue-400 border-blue-300 text-white shadow-lg">
                <AlertTitle className="font-bold">¿Queres jugar?</AlertTitle>
                <AlertDescription className="text-blue-100">
                  ¡Hace click en el icono del hacha para comenzar a ganar
                  puntos!
                </AlertDescription>
              </Alert>
            )}
            {showCongrats && (
              <Alert className="bg-gradient-to-r from-green-600 to-green-400 border-green-300 text-white shadow-lg">
                <AlertTitle className="font-bold">¡Felicidades!</AlertTitle>
                <AlertDescription className="text-green-100">
                  ¡Has alcanzado los 100 puntos!
                </AlertDescription>
              </Alert>
            )}
            <Button
              variant="default"
              size="sm"
              className="mt-4 text-blue-300 border-blue-300 hover:bg-blue-300 hover:text-black"
              onClick={() => setShowIframe((prev) => !prev)}
            >
              {showIframe ? "Ocultar Lumberjack Real" : "Usar Lumberjack Real"}
            </Button>
            {showIframe && (
              <div className="mt-6 border border-blue-300 rounded-lg overflow-hidden">
                <iframe
                  title="Lumber Jack Game"
                  src="https://tbot.xyz/lumber/"
                  width="100%"
                  height="600"
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
