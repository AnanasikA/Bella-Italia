import React, { useState } from 'react';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dziękujemy za rezerwację, ${formData.name}!`);
    // Tutaj można dodać logikę wysyłania danych do serwera
  };

  return (
    <section 
      className="py-32 px-6 bg-cover bg-center text-green-700 text-center min-h-screen"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1710775715236-7abbac43ecb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-lg mx-auto animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-red-600 animate-slide-in-down">Zarezerwuj Stolik</h2>
        <p className="text-lg mb-10 opacity-80 animate-slide-in-down delay-200">Zarezerwuj stolik i ciesz się autentyczną włoską kuchnią w naszej restauracji.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-slide-in-left delay-300">
            <label className="block text-left mb-2 font-semibold">Imię i nazwisko</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="animate-slide-in-left delay-400">
            <label className="block text-left mb-2 font-semibold">Liczba osób</label>
            <input type="number" name="people" value={formData.people} onChange={handleChange} className="w-full p-2 border rounded" required min="1" />
          </div>
          <div className="animate-slide-in-left delay-500">
            <label className="block text-left mb-2 font-semibold">Data</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="animate-slide-in-left delay-600">
            <label className="block text-left mb-2 font-semibold">Godzina</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="animate-slide-in-left delay-700">
            <label className="block text-left mb-2 font-semibold">Uwagi (opcjonalnie)</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg animate-slide-in-up delay-800">
            Zarezerwuj
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reservation;

