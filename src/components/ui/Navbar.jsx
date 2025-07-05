import React, { useState } from "react";
import { Link } from "react-router";
import { List, X } from "@phosphor-icons/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-lg font-semibold">Darcy Zottis</div>

        {/* Botão hamburguer - mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-light">
          <li>
            <Link to="/" className="hover:text-orange-400 transition-colors">
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/historico"
              className="hover:text-orange-400 transition-colors"
            >
              Histórico
            </Link>
          </li>
          <li>
            <Link
              to="/opiniao"
              className="hover:text-orange-400 transition-colors"
            >
              Opinião
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className="hover:text-orange-400 transition-colors"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      {/* Links - Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white text-sm font-light">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/historico"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Histórico
              </Link>
            </li>
            <li>
              <Link
                to="/opiniao"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Opinião
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
