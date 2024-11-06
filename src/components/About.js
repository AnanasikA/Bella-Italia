import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white text-green-700 flex flex-col items-center">
      <h3 className="text-4xl font-bold mb-12 text-red-600">O nas</h3>
      
      <div className="max-w-3xl text-center space-y-8">
        
        {/* Pierwszy akapit */}
        <div>
          <p className="text-lg opacity-80 leading-relaxed">
            Bella Italia to miejsce, gdzie tradycja spotyka się z nowoczesnością. Nasza restauracja oferuje autentyczną kuchnię włoską, przygotowywaną z pasją i najwyższej jakości składników. Każdy posiłek to wyjątkowa podróż kulinarna, która przenosi naszych gości do serca słonecznej Italii.
          </p>
          <div className="w-12 h-1 bg-red-600 mx-auto my-4"></div> {/* Element dekoracyjny */}
        </div>

        {/* Drugi akapit */}
        <div>
          <p className="text-lg opacity-80 leading-relaxed">
            Nasi kucharze tworzą dania inspirowane klasycznymi przepisami z różnych regionów Włoch. Zawsze dbamy o świeżość i autentyczność składników, aby każde danie było pełne aromatu i wyrazistych smaków.
          </p>
          <div className="w-12 h-1 bg-green-700 mx-auto my-4"></div> {/* Element dekoracyjny */}
        </div>

        {/* Trzeci akapit */}
        <div>
          <p className="text-lg opacity-80 leading-relaxed">
            Zapraszamy do naszej restauracji, gdzie pasja do włoskiej kuchni jest wyczuwalna w każdym kęsie. U nas poczujesz się jak we Włoszech, otoczony gościnnością i ciepłą atmosferą.
          </p>
        </div>

        {/* Przycisk */}
        <a href="/menu" className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg mt-8">
          Zobacz menu
        </a>
      </div>
    </section>
  );
}

export default About;






