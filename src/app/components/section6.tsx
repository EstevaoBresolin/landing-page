import React from "react";

export default function Section6 () {
  return (
    <section id="saiba-mais" className="px-4 py-16 bg-white text-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12  titulo">Quer saber mais?</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {/* Card 1 */}
<a
  href="#"
  className="group block border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-50 p-5"
>
  <img
    src="https://picsum.photos/id/1011/800/600"
    alt="Carro elétrico"
    className="w-full h-48 object-cover group-hover:brightness-90 transition duration-300 rounded-sm"
  />
  <div className="p-4">
    <h3 className="font-semibold mb-2  titulo">
      Lorem ipsum dolor sit amet, consectetur adipisicing
    </h3>
  </div>
</a>

{/* Card 2 */}
<a
  href="#"
  className="group block border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-50 p-5"
>
  <img
    src="https://picsum.photos/id/1027/800/600"
    alt="Pessoa entrando no carro"
    className="w-full h-48 object-cover group-hover:brightness-90 transition duration-300 rounded-sm"
  />
  <div className="p-4">
    <h3 className="font-semibold mb-2  titulo">
      Quidem possimus libero quia adipisci soluta dolore
    </h3>
  </div>
</a>

{/* Card 3 */}
<a
  href="#"
  className="group block border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-50 p-5"
>
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    alt="Caminho verde"
    className="w-full h-48 object-cover group-hover:brightness-90 transition duration-300 rounded-sm"
  />
  <div className="p-4">
    <h3 className="font-semibold mb-2  titulo">
      Iusto in culpa nulla minima, et est neque id omnis
    </h3>
  </div>
</a>
      </div>

      {/* Rodapé com texto menor */}
      <div className="text-xs text-gray-500 max-w-5xl mx-auto space-y-2">
        <p>
            Quidem possimus libero quia adipisci soluta dolores iusto in culpa nulla minima, et est neque id omnis numquam pariatur tempora voluptas perferendis. <a href="#" className="text-blue-500 hover:underline">aqui</a>.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </p>
        <p>
            Quidem possimus libero quia adipisci soluta dolores iusto in culpa nulla minima, et est neque id omnis
        </p>
        <p>
            Dolor sit amet, consectetur adipisicing elit. Quidem possimus libero quia adipisci soluta dolores iusto...
        </p>
      </div>
    </section>
  );
};
