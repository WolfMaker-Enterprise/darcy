import React from "react";

export default function Home() {
  return (
    <section
      className="relative flex items-end justify-center overflow-hidden w-full h-auto md:h-[853px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/image/bg/BgHome.png')",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto px-4 md:px-8 gap-10 py-10 md:py-40">
        {/* Texto à esquerda no desktop */}
        <div className="text-white w-full md:w-1/2 space-y-6 text-center md:text-left pt-10 sm:pt-16 md:pt-0">
          <h3 className="text-[#E15A2A] text-sm md:text-base font-bold tracking-[1.8px] uppercase">
            DARCY LUIZ ZOTTIS FILHO
          </h3>

          <h1 className="text-white text-2xl md:text-4xl font-semibold leading-snug tracking-tight">
            Empreendedor, diretor de entidade empresarial e defensor da política
            como missão
          </h1>

          <p className="text-white text-base md:text-lg tracking-tight leading-relaxed">
            Conheça minha história, opiniões e propostas para transformar a
            sociedade.
          </p>
        </div>

        {/* Imagem à direita no desktop */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <img
            src="/image/Darcy.png"
            alt="Darcy Zottis"
            className="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[450px] xl:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
