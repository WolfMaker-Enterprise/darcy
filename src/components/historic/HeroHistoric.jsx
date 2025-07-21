import React from "react";

export default function HeroHistoric() {
  return (
    <section
      className="relative flex items-center justify-start bg-cover bg-center text-white h-[500px] md:h-[737px] w-full px-6 md:px-64"
      style={{
        backgroundImage: "url('/image/bg/BgHistoric.png')",
      }}
    >
      <div className="z-10 max-w-3xl">
        <h3 className="text-xs md:text-sm text-orange-500 font-bold tracking-widest uppercase mb-2">
          Darcy Luiz Zottis Filho
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Conheça Darcy Zottis
        </h1>
        <p className="text-base md:text-xl leading-relaxed">
          Conheça minha história, opiniões e propostas para transformar a
          sociedade.
        </p>
      </div>
    </section>
  );
}
