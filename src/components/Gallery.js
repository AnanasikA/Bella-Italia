import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-white text-center text-green-700">
      {/* Nagłówek sekcji */}
      <h3 className="text-4xl font-bold mb-6 text-red-600">Galeria</h3>
      <p className="text-lg mb-10 opacity-80">Zobacz naszą restaurację i dania</p>
      
      {/* Siatka zdjęć */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { src: 'https://images.unsplash.com/photo-1497644083578-611b798c60f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 1', label: 'Wnętrze restauracji' },
          { src: 'https://images.unsplash.com/photo-1682264788192-9abdec90c425?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 2', label: 'Danie dnia' },
          { src: 'https://plus.unsplash.com/premium_photo-1679434184720-f729541052eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 3', label: 'Nasi goście' },
          { src: 'https://images.unsplash.com/photo-1651981038189-e71e557f5869?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 4', label: 'Przygotowania' },
          { src: 'https://plus.unsplash.com/premium_photo-1669557209110-34d9a507d1f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 5', label: 'Deser' },
          { src: 'https://images.unsplash.com/photo-1528738064262-9f834cbdfda1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 6', label: 'Specjalność szefa' },
          { src: 'https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 7', label: 'Wieczór włoski' },
          { src: 'https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Zdjęcie 8', label: 'Włoskie smaki' },
        ].map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded shadow-lg">
            <img src={image.src} alt={image.alt} className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{image.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;



