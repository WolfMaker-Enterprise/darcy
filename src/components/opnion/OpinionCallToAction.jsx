import React from "react";

export default function OpinionCallToAction() {
  return (
    <section
      className="w-full h-[300px] md:h-[400px] lg:h-[512px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/image/bg/BgOpnionInver.png')",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-15 md:px-10 lg:pl-[700px] flex justify-start">
          <div className="text-white max-w-md space-y-6 text-left">
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">
              Textos, vídeos e opiniões
            </h2>

            <a
              href="/opiniao"
              className="inline-block px-6 py-3 text-base md:text-lg bg-[#E15A2A] text-white font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-[#c7481d] hover:scale-105 hover:shadow-lg"
            >
              Clique aqui para visualizar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
