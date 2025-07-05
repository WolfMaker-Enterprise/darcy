import React from "react";

export default function HeroOpnion() {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] lg:h-[512px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/image/bg/BgOpnion.png')", // coloque a imagem nessa pasta ou ajuste o caminho
      }}
    >
      {/* Overlay escura opcional */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="w-full md:w-1/2 space-y-2 text-left">
          <h3 className="text-[#E15A2A] text-xs sm:text-sm font-bold tracking-widest uppercase">
            DARCY LUIZ ZOTTIS FILHO
          </h3>
          <h1 className="text-white text-6xl sm:text-4xl font-semibold">
            Opinião
          </h1>
        </div>
      </div>
    </section>
  );
}
