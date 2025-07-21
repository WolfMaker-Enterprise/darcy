import React from "react";
import { GraduationCap } from "lucide-react";

export default function Trajectory() {
  const items = [
    "Diretor de empresas de Logística Refrigerada e Agropecuária",
    "Diretor da Associação Empresarial de Cachoeirinha",
    "Diretor da Federasul",
    "Diretor da FAGV",
    "Vice Coordenador do Movimento Livre Acesso á Free Way – transferiu para fora da área urbana o pedágio da Free Way em Gravataí.",
    "Coordenador do Movimento RS 118 Sem Pedágio – impediu a instalação de pedágio urbano na ERS 118 e luta pela conclusão da duplicação da rodovia.",
    "Ativo em todas as áreas de interesse dos empreendedores",
  ];

  return (
    <section className="w-full bg-white px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Minha trajetória profissional
          </h2>
          <p className="text-gray-700 mb-6">
            Acredito no Brasil e nos 3 poderes e instituições funcionando em
            harmonia. Cada dia me convenço que precisamos participar mais da
            política e mudar nossa realidade.
          </p>

          <div className="space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-white rounded-lg shadow px-4 py-3"
              >
                <GraduationCap className="text-orange-500 mt-1 w-5 h-5 shrink-0" />
                <p className="text-sm text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative max-w-[380px] md:max-w-[440px] lg:max-w-[500px]">
          <div className="absolute top-3 left-3 w-full h-full bg-orange-500 rounded-lg z-0" />
          <img
            src="/image/Image.png"
            alt="Reunião"
            className="relative z-10 rounded-lg shadow-md w-full h-auto aspect-[4/5] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
