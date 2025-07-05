import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function HeroContacts() {
  return (
    <section
      className="w-full h-[992px] bg-cover bg-center text-white flex flex-col items-center justify-center px-4 py-16"
      style={{
        backgroundImage: "url('/image/bg/BgContact.png')",
      }}
    >
      <div className="text-center max-w-2xl w-full">
        <p className="text-sm uppercase tracking-widest mb-2">Fale comigo</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Vamos conversar?
        </h1>
        <p className="mb-6 text-base">
          Se você compartilha de ideias parecidas ou deseja contribuir de alguma
          forma, entre em contato.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <FaWhatsapp size={20} weight="fill" className="text-white" />
            <span>051 99914 7030</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone size={20} weight="fill" className="text-white" />
            <span>051 99914 7030</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={20} weight="fill" className="text-white" />
            <span>darcy.zottis@villorba.com.br</span>
          </div>
        </div>

        <form className="flex flex-col gap-4 w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Nome"
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500"
          />
          <textarea
            rows={4}
            placeholder="Escreva sua mensagem..."
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 resize-none"
          />
          <button
            type="submit"
            className="bg-[#E15A2A] hover:bg-orange-600 transition text-white font-semibold py-2 px-6 rounded-md self-center"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
