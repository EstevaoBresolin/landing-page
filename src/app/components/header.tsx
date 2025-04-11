import React from "react";
import { Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white text-sm px-6 md:px-16 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold whitespace-nowrap">
          Nome Empresa 
          {/* <span className="font-light">para Empresas</span> */}
        </div>

        {/* Menu de navegação */}
        <nav className="hidden md:flex items-center gap-6">
          {/* <div className="group relative cursor-pointer">
            <span className="group-hover:underline">Introdução</span> */}
            {/* Submenu futuro aqui */}
          {/* </div>
          <div className="group relative cursor-pointer">
            <span className="group-hover:underline">Soluções</span>
          </div> */}
          <a href="#introducao" className="hover:underline">
            Introdução
          </a>
          <a href="#solucoes" className="hover:underline">
            Soluções
          </a>
          <a href="#precos" className="hover:underline">
            Preços
          </a>
          <a href="#suporte" className="hover:underline">
          Suporte ao usuário
          </a>
          <a href="#recursos" className="hover:underline">
          Recursos
          </a>
          <a href="#saiba-mais" className="hover:underline">
          Saiba mais
          </a>
          <a href="#footer" className="hover:underline">
            Contatos
          </a>
          {/* <div className="group relative cursor-pointer">
            <span className="group-hover:underline">Suporte ao usuário</span>
          </div>
          <div className="group relative cursor-pointer">
            <span className="group-hover:underline">Recursos</span>
          </div> */}
        </nav>

        {/* Ações do lado direito */}
        <div className="flex items-center gap-4 text-sm">
          <button className="flex items-center gap-1 hover:text-gray-300">
            <Globe size={16} /> PT-BR
          </button>
          <a href="#" className="hover:underline hidden sm:inline">
            Fale com a gente
          </a>
          <a href="#" className="hover:underline hidden sm:inline">
            Faça login
          </a>
          <button className="bg-white text-black px-4 py-1 rounded-full font-medium hover:bg-gray-200 transition">
            Começar
          </button>
        </div>
      </div>
    </header>
  );
}
