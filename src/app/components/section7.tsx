import React from "react";
import { Globe } from "lucide-react";

export default function Section7 () {
  return (
    <footer id="footer" className="bg-black text-white px-6 md:px-16 py-12 text-sm">
      <div className="max-w-screen-xl mx-auto">
        {/* Branding e ajuda */}
        <div className="mb-10">
          <h2 className="text-lg font-bold">Uber para Empresas</h2>
          <a href="#" className="text-gray-300 hover:text-white mt-2 block">
            Acesse a Central de Ajuda
          </a>
        </div>

        {/* Links principais */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-semibold mb-2">Quem somos</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">NewsLetter</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Site</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Produtos</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Produto 1</a></li>
              <li><a href="#">Produto 2</a></li>
              <li><a href="#">Produto 3</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Titulo</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Texto</a></li>
              <li><a href="#">Texto</a></li>
              <li><a href="#">Texto</a></li>
            </ul>
          </div>
        </div>

        {/* Redes sociais e idioma/localização */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">
          {/* Redes sociais */}
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>

          {/* Idioma e localização */}
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <button className="flex items-center gap-2 hover:text-white">
              <Globe size={16} /> Português (Brasil)
            </button>
            <span>📍Caxias do Sul</span>
          </div>
        </div>

        {/* App stores */}
        <div className="mt-8 flex gap-4">
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-12" alt="Google Play" /></a>
          <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="h-12" alt="App Store" /></a>
        </div>

        {/* Desenvolvedor */}
      <p className="mt-8 text-center text-gray-400 text-xs">
        © Desenvolvido por Estevão Bresolin
      </p>
      </div>
    </footer>
  );
};
