import image1 from '@/app/assets/img-mulher-cafe.png'; // substitua pela sua imagem
import Image from 'next/image';

export default function Section1() {
  return (
    <section id='introducao' className="bg-black text-white px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto obcaecati iure quis dicta, non molestias sequi dolorem,
             adipisci eligendi maxime ipsa sapiente reiciendis eaque tempora, debitis quasi. Dolorum, quam nihil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="#"
              className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Dolorum, quam nihil
            </a>
            <a
              href="#"
              className="underline underline-offset-4 text-white hover:text-gray-300 transition"
            >
              Architecto obcaecati iure
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Image 
            src={image1}
            alt="Pessoa usando o app da Uber"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
