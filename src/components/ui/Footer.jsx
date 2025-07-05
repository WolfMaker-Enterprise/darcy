import React from "react";
import { Link } from "react-router";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a23] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Coluna 1: Nome */}
        <div>
          <h2 className="text-lg font-semibold">Darcy Zottis</h2>
        </div>

        {/* Coluna 2: Abas */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Abas</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/historico">Histórico</Link>
            </li>
            <li>
              <Link to="/opiniao">Opinião</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-lg" />
              051 99914 7030
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              darcy.zottis@villorba.com.br
            </li>
          </ul>
        </div>

        {/* Coluna 4: Redes sociais */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Redes sociais</h3>
          <div className="flex items-center gap-4 text-lg">
            <a href="#" className="hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2025 Darcy Zottis. Todos os direitos reservados.</p>
        <a
          href="#top"
          className="flex items-center gap-1 mt-4 md:mt-0 text-white hover:text-orange-400"
        >
          <FaArrowUp className="text-sm" />
          <span className="text-sm font-semibold">Voltar ao topo</span>
        </a>
      </div>
    </footer>
  );
}
