import React from 'react';

function FullMenu() {
  return (
    <section className="py-20 px-6 bg-white text-center text-green-700">
      <h2 className="text-4xl font-bold mb-12 text-red-600">Pełne Menu</h2>
      <p className="text-lg mb-12 opacity-80 max-w-3xl mx-auto">Zapoznaj się z pełnym menu naszej restauracji, które oferuje szeroki wybór autentycznych włoskich dań przygotowanych z pasją i najwyższej jakości składników.</p>

      {/* Sekcje menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Przystawki */}
        <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h4 className="font-semibold text-2xl mb-6 text-red-600">Przystawki</h4>
          <ul className="space-y-6">
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Bruschetta</strong> – Chrupiący chleb z pomidorami, bazylią i oliwą</span><span className="text-red-600 font-semibold whitespace-nowrap">14,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Caprese</strong> – Sałatka z mozzarelli, pomidorów i bazylii</span><span className="text-red-600 font-semibold whitespace-nowrap">22,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Carpaccio</strong> – Wołowina z parmezanem i rukolą</span><span className="text-red-600 font-semibold whitespace-nowrap">32,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Arancini</strong> – Sycylijskie kuleczki ryżowe</span><span className="text-red-600 font-semibold whitespace-nowrap">18,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Antipasto misto</strong> – Zestaw włoskich przystawek</span><span className="text-red-600 font-semibold whitespace-nowrap">35,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Olive Ascolane</strong> – Smażone oliwki nadziewane mięsem</span><span className="text-red-600 font-semibold whitespace-nowrap">20,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Crostini</strong> – Grzanki z pastą z wątróbki</span><span className="text-red-600 font-semibold whitespace-nowrap">15,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Insalata di Mare</strong> – Sałatka z owocami morza</span><span className="text-red-600 font-semibold whitespace-nowrap">38,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Prosciutto e Melone</strong> – Szynka parmeńska z melonem</span><span className="text-red-600 font-semibold whitespace-nowrap">28,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Focaccia</strong> – Chleb focaccia z oliwą i rozmarynem</span><span className="text-red-600 font-semibold whitespace-nowrap">12,00 zł</span></li>
          </ul>
        </div>
        
        {/* Dania główne */}
        <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h4 className="font-semibold text-2xl mb-6 text-red-600">Dania główne</h4>
          <ul className="space-y-6">
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Lasagna</strong> – Tradycyjna lazania z mięsem i sosem</span><span className="text-red-600 font-semibold whitespace-nowrap">38,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Spaghetti Carbonara</strong> – Spaghetti z sosem jajecznym i boczkiem</span><span className="text-red-600 font-semibold whitespace-nowrap">30,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Risotto z grzybami</strong> – Kremowe risotto z grzybami</span><span className="text-red-600 font-semibold whitespace-nowrap">34,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Gnocchi</strong> – Włoskie kluski w sosie pomidorowym</span><span className="text-red-600 font-semibold whitespace-nowrap">28,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Pizza Margherita</strong> – Klasyczna pizza z mozzarellą i bazylią</span><span className="text-red-600 font-semibold whitespace-nowrap">29,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Pizza Diavola</strong> – Pikantna pizza z salami i oliwkami</span><span className="text-red-600 font-semibold whitespace-nowrap">32,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Pollo alla Griglia</strong> – Grillowany kurczak z warzywami</span><span className="text-red-600 font-semibold whitespace-nowrap">36,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Ravioli</strong> – Pierogi z ricottą i szpinakiem</span><span className="text-red-600 font-semibold whitespace-nowrap">32,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Tagliatelle al Tartufo</strong> – Makaron z truflami</span><span className="text-red-600 font-semibold whitespace-nowrap">40,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Ossobuco</strong> – Duszona cielęcina z warzywami</span><span className="text-red-600 font-semibold whitespace-nowrap">48,00 zł</span></li>
          </ul>
        </div>

        {/* Desery */}
        <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h4 className="font-semibold text-2xl mb-6 text-red-600">Desery</h4>
          <ul className="space-y-6">
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Tiramisu</strong> – Deser z mascarpone, kawą i kakao</span><span className="text-red-600 font-semibold whitespace-nowrap">18,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Panna Cotta</strong> – Delikatny deser śmietankowy</span><span className="text-red-600 font-semibold whitespace-nowrap">16,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Canollo</strong> – Ciastka z kremem ricotta</span><span className="text-red-600 font-semibold whitespace-nowrap">15,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Gelato</strong> – Tradycyjne włoskie lody</span><span className="text-red-600 font-semibold whitespace-nowrap">12,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Affogato</strong> – Espresso z lodami waniliowymi</span><span className="text-red-600 font-semibold whitespace-nowrap">20,00 zł</span></li>
          </ul>
        </div>

        {/* Napoje */}
        <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h4 className="font-semibold text-2xl mb-6 text-red-600">Napoje</h4>
          <ul className="space-y-6">
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Espresso</strong> – Mocna, aromatyczna kawa</span><span className="text-red-600 font-semibold whitespace-nowrap">10,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Cappuccino</strong> – Kawa z pianką mleczną</span><span className="text-red-600 font-semibold whitespace-nowrap">12,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Limoncello</strong> – Likier cytrynowy</span><span className="text-red-600 font-semibold whitespace-nowrap">15,00 zł</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Wino czerwone</strong> – Wybór włoskich win</span><span className="text-red-600 font-semibold whitespace-nowrap">15,00 zł / 150ml</span></li>
            <li className="flex justify-between text-left"><span className="flex-1 pr-4"><strong>Woda mineralna</strong> – Gazowana lub niegazowana</span><span className="text-red-600 font-semibold whitespace-nowrap">8,00 zł</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FullMenu;


