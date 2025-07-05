import React from "react";
import { FiCheck } from "react-icons/fi";

export default function Value() {
  const values = [
    "Liberdade.",
    "Menos impostos.",
    "Política como missão.",
    "O trabalho é o caminho para o progresso da sociedade.",
    "Livre iniciativa.",
    "Empreendedorismo.",
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          Valores
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Imagem da bandeira com altura fixa e largura proporcional */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[827px] h-[545.73px] flex items-center justify-center">
              <img
                src="/image/brazil.png"
                alt="Bandeira do Brasil"
                className="rounded-lg w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Lista de valores */}
          <ul className="w-full md:w-1/2 space-y-4">
            {values.map((value, index) => (
              <li
                key={index}
                className="flex items-center gap-4 bg-white shadow-sm rounded-lg p-4"
              >
                {/* Ícone com círculo vazado */}
                <div className="p-2 rounded-md bg-[#FFF3F0] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-[#E15A2A] flex items-center justify-center">
                    <FiCheck className="text-[#E15A2A]" size={14} />
                  </div>
                </div>
                <span className="text-gray-800 text-base">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
