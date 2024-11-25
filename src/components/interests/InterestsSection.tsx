import * as motion from "framer-motion/client";
import { BookOpen, Cat, Code, Music } from "lucide-react";

export default function InterestsSection() {
  const interests = [
    {
      icon: Code,
      title: "Programación",
      description:
        "Desde el desarrollo de soluciones innovadoras hasta la resolución de desafíos complejos, la programación es el lienzo sobre el que pinto mis ideas.",
    },
    {
      icon: Cat,
      title: "Gatos",
      description:
        "Los gatos ocupan un lugar fundamental en mi vida. Su carácter independiente, combinado con su ternura y elegancia, me inspira a diario. Su presencia aporta tranquilidad y alegría, convirtiéndolos en compañeros únicos e invaluables.",
    },
    {
      icon: Music,
      title: "Guitarra",
      description:
        "La creatividad cobra vida cuando encuentro la manera ideal de expresarla a través de la guitarra, ya sea mediante un toque sutil y delicado o entregándome por completo al ritmo y la emoción del momento.",
    },
    {
      icon: BookOpen,
      title: "Filosofía",
      description:
        "Disfruto adentrarme en cuestiones filosóficas profundas y explorar diferentes perspectivas. Siempre encuentro fascinante la riqueza de ideas y significados que surgen al analizar temas con múltiples capas por descubrir.",
    },
  ];

  return (
    <section
      id="interests"
      className="py-20 bg-gradient-to-b from-black to-blue-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          Mis <span className="text-blue-500">intereses</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="p-6 rounded-2xl bg-blue-900/50 hover:bg-blue-800/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <interest.icon className="h-8 w-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
              <p className="text-gray-300">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
