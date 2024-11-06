import React, { useEffect, useState } from 'react';

function Counter() {
  const [guests, setGuests] = useState(0);
  const [pizzas, setPizzas] = useState(0);
  const [coffees, setCoffees] = useState(0);

  useEffect(() => {
    const intervalGuests = setInterval(() => {
      setGuests((prev) => (prev < 500 ? prev + 1 : 500));
    }, 10);
    const intervalPizzas = setInterval(() => {
      setPizzas((prev) => (prev < 1200 ? prev + 1 : 1200));
    }, 10);
    const intervalCoffees = setInterval(() => {
      setCoffees((prev) => (prev < 300 ? prev + 1 : 300));
    }, 10);

    return () => {
      clearInterval(intervalGuests);
      clearInterval(intervalPizzas);
      clearInterval(intervalCoffees);
    };
  }, []);

  return (
    <section className="py-12 px-4 bg-green-50 text-center text-green-700">
      <h3 className="text-3xl font-semibold mb-4 text-red-600">Nasze liczby</h3>
      <div className="flex justify-center space-x-8">
        <div>
          <p className="text-4xl font-bold text-red-600">{guests}+</p>
          <p>Zadowolonych gości</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-red-600">{pizzas}+</p>
          <p>Wydanych pizz</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-red-600">{coffees}+</p>
          <p>Filiżanek kawy</p>
        </div>
      </div>
    </section>
  );
}

export default Counter;
