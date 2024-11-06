import React from 'react';

function FeaturedDish() {
  return (
    <section id="featured_dish" className="py-16 px-6 bg-white text-center text-green-700">
      {/* Nagłówek */}
      <h3 className="text-4xl font-bold mb-10 text-red-600">Danie dnia</h3>

      {/* Kontener na karty dań */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Karta danie 1 */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://images.unsplash.com/photo-1560035285-64808ba47bda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lasagna alla Bolognese" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h4 className="text-2xl font-bold text-red-600 mb-2">Lasagna alla Bolognese</h4>
          <p className="text-md mb-4">Tradycyjna włoska lazania z aromatycznym mięsem wołowym, warzywami i serem ricotta.</p>
          <p className="text-lg font-semibold text-red-600 mb-4">Cena: 29,99 zł</p>
          <a href='#contact' className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg">
            Zamów teraz
          </a>
        </div>

        {/* Karta danie 2 */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://images.unsplash.com/photo-1682264788192-9abdec90c425?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza Margherita" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h4 className="text-2xl font-bold text-red-600 mb-2">Pizza Margherita</h4>
          <p className="text-md mb-4">Klasyczna pizza z sosem pomidorowym, mozzarellą i świeżą bazylią.</p>
          <p className="text-lg font-semibold text-red-600 mb-4">Cena: 24,99 zł</p>
          <a href='#contact' className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg">
            Zamów teraz
          </a>
        </div>

        {/* Karta danie 3 */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="https://images.pexels.com/photos/6605652/pexels-photo-6605652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Ravioli di Ricotta" className="w-full h-64 object-cover rounded-lg mb-4" />
          <h4 className="text-2xl font-bold text-red-600 mb-2">Ravioli di Ricotta</h4>
          <p className="text-md mb-4">Delikatne pierożki wypełnione ricottą i szpinakiem, podane z masłem szałwiowym.</p>
          <p className="text-lg font-semibold text-red-600 mb-4">Cena: 27,99 zł</p>
          <a href='#contact' className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200 shadow-lg">
            Zamów teraz
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedDish;

