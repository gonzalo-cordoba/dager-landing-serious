import * as motion from "framer-motion/client";
import { BookOpen, Cat, Code, Music, Sandwich } from "lucide-react";

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
        "Los pequeños peludos son parte esencial de mi vida. Su carácter independiente y su ternura me inspiran todos los días. Y bueno, los gatos tambien me gustan mucho.",
    },
    {
      icon: Music,
      title: "Guitarra",
      description:
        "La creatividad fluye cuando encuentro la manera perfecta de sostenerla, ya sea con un toque suave o entregándome por completo al ritmo del momento.",
    },
    {
      icon: BookOpen,
      title: "Filosofía",
      description:
        "Disfruto meterme en temas profundos y explorar diferentes ángulos. Siempre encuentro fascinante todo lo que tiene múltiples capas por descubrir.",
    },
    {
      icon: Sandwich,
      title: "Pepinos",
      description:
        "Un hobby curioso, pero que me enseña a disfrutar de lo simple. Al final son esas cosas largas e inesperadas las que le dan sabor a la vida.",
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
