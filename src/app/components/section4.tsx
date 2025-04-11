import React from "react";

export default function Section4 () {
  return (
    <section id="suporte" className="bg-gray-50 px-4 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-600">
        Voluptas exercitationem unde magni perferendis laborum ullam ipsam! Id vitae illum, est voluptate magni nulla!
        </h2>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center gap-10 flex-wrap mb-16">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Zoom"
          className="h-10"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Coca-Cola"
          className="h-10"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
          alt="Samsung"
          className="h-10"
        />
      </div>

      {/* Depoimento com vídeo */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-gray-800 italic mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem unde magni perferendis laborum ullam ipsam! Id vitae illum, est voluptate magni nulla expedita optio omnis odit quidem, provident porro!
          </p>
          <p className="text-sm font-medium text-gray-700">
            — Voluptas exercitationem unde magni perferendis laborum ullam ipsam! Id vitae illum, estsda
          </p>
        </div>

        {/* Vídeo responsivo */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Vídeo institucional"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
