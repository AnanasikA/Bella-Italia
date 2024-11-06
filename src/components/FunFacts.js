import React from 'react';
import oliveIcon from '../images/olive-branch.png'; // Upewnij się, że ikona oliwek jest we właściwej ścieżce

function FunFacts() {
  return (
    <section className="py-16 px-6 bg-red-50 text-center text-green-700">
      {/* Nagłówek sekcji */}
      <h3 className="text-4xl font-bold mb-10 text-red-600">Ciekawostki o włoskiej kuchni</h3>
      
      {/* Kontener ciekawostek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Karta ciekawostki 1 */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${oliveIcon})`, backgroundSize: '60px', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
        >
          <p className="font-bold text-2xl mb-4 text-red-600">Pizza Margherita</p>
          <p>Stworzona na cześć królowej Margherity z Neapolu.</p>
        </div>

        {/* Karta ciekawostki 2 */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${oliveIcon})`, backgroundSize: '60px', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
        >
          <p className="font-bold text-2xl mb-4 text-red-600">Pasta</p>
          <p>Istnieje ponad 600 różnych rodzajów makaronów we Włoszech.</p>
        </div>

        {/* Karta ciekawostki 3 */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${oliveIcon})`, backgroundSize: '60px', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
        >
          <p className="font-bold text-2xl mb-4 text-red-600">Tiramisu</p>
          <p>Tradycyjny deser włoski, który powstał w regionie Wenecji.</p>
        </div>

        {/* Karta ciekawostki 4 */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${oliveIcon})`, backgroundSize: '60px', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
        >
          <p className="font-bold text-2xl mb-4 text-red-600">Oliwa z oliwek</p>
          <p>Włochy są jednym z największych producentów oliwy z oliwek na świecie.</p>
        </div>

        {/* Karta ciekawostki 5 */}
        <div 
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${oliveIcon})`, backgroundSize: '60px', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
        >
          <p className="font-bold text-2xl mb-4 text-red-600">Gelato</p>
          <p>Włoskie lody, które mają mniej tłuszczu niż tradycyjne lody.</p>
        </div>

         {/* Karta ciekawostki 6 */}
         <div 
          className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${oliveIcon})`, backgroundSize: '60px', backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat' }}
        >
          <p className="font-bold text-2xl mb-4 text-red-600">Ravioli</p>
          <p>Popularne włoskie pierożki, które mogą być wypełnione różnymi nadzieniami.</p>
        </div>

      </div>
    </section>
  );
}

export default FunFacts;


