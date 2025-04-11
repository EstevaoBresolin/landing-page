import Link from "next/link";

export default function Gerenciador() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Projetos</h1>
        <p className="text-gray-400">Escolha uma das opções abaixo:</p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Link
          href="/landingpages"
          className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-center shadow-md transition"
        >
          💳 Comprar Curso
        </Link>
        <Link
          href="/landingpages"
          className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-center shadow-md transition"
        >
          🚀 Mentoria
        </Link>
        <Link
          href="/landingpages"
          className="bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl text-center shadow-md transition"
        >
          📈 Acompanhamento
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">© 2025 Estevão Bresolin</footer>
    </main>
  );
}
