import React from "react";

export default function Section3 () {
  return (
    <section id="precos" className="bg-white py-16 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 max-w-3xl mx-auto text-gray-700">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et veniam dolor doloremque blanditiis 
      </h2>

      {/* <div className="flex justify-center gap-8 flex-wrap mb-16">
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="Viagens a trabalho"
            className="h-20 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">Consectetur adipisicing </p>
        </div>
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="Viagens de cortesia"
            className="h-20 mx-auto mb-2"
          />
          <p className="font-semibold text-gray-700">Culpa nulla minima</p>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {beneficios.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-12 justify-center"
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                className="w-full max-w-[300px] rounded-xl shadow-md object-cover"
              />
              <div className="text-left md:w-2/4">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">
                  {item.titulo}
                </h3>
                <p className="text-gray-600">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

const beneficios = [
  {
    imagem: "https://img.freepik.com/free-vector/people-analyzing-growth-charts-laptop-screen_74855-6615.jpg",
    titulo: "Quidem possimus libero quia adipisci soluta dolore",
    descricao:
      "Dolor sit amet, consectetur adipisicing elit. Quidem possimus libero quia adipisci soluta dolores iusto in culpa nulla minima, et est neque id omnis numquam pariatur tempora voluptas perferendis.",
  },
  {
    imagem: "https://img.freepik.com/free-vector/hand-holding-smartphone-checking-taxi-service-app_23-2148572822.jpg",
    titulo: "Iusto in culpa nulla minima, et est neque id omnis",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem possimus libero quia adipisci soluta dolores iusto in culpaLorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem possimus libero .",
  },
  {
    imagem: "https://img.freepik.com/free-vector/e-wallet-illustration-concept_114360-7575.jpg",
    titulo: "Numquam pariatur tempora voluptas perferendis",
    descricao:
      "Quidem possimus libero quia adipisci soluta dolores iusto in culpa nulla minima, et est neque id omnis numquam pariatur tempora voluptas perferendis.Quidem possimus libero quia adipisci soluta dolores iusto in culpa nulla minima, et est neque id ",
  },
];
