import React from "react";
import { GraduationCap } from "lucide-react";

export default function Graduations() {
  const items = [
    "Engenheiro Agrônomo – UFRGS",
    "Especialização em Logística Empresarial – ULBRA",
    "MBA Marketing Gestão em Vendas – ESPM",
    "Liderança Política – La Salle",
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-12 py-16 bg-white max-w-7xl mx-auto">
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-800">
          Formação que me trouxe até aqui
        </h2>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg px-4 py-3 gap-3"
            >
              <GraduationCap className="text-orange-500 w-5 h-5 shrink-0" />
              <span className="text-sm text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 relative max-w-sm">
        <div className="absolute top-3 left-3 w-full h-full bg-orange-500 rounded-lg z-0" />
        <img
          src="/image/Image.png"
          alt="Reunião"
          className="relative z-10 rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
