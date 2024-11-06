import React from 'react';
import olive from '../images/olive-branch.png';

function Hero() {
    return (
      <section
        className="hero h-screen relative text-white flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
  
        <div className="relative z-10 text-center font-serif max-w-2xl mx-auto px-6 py-8 bg-black/50 rounded-lg">
          {/* Większy domowy akcent */}
          <div className="mb-4">
            <img src={olive} alt="Gałązka oliwna" className="w-16 h-16 mx-auto opacity-80" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: "'Pacifico', cursive", textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Bella Italia
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-90 text-white text-left leading-relaxed" style={{ fontFamily: "'Josefin Sans', sans-serif", textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Odkryj smak prawdziwej, domowej kuchni włoskiej, przygotowanej z najwyższej jakości składników i tradycyjnych
            przepisów. Nasza restauracja to miejsce, gdzie każdy posiłek jest świętem. Zapraszamy na niezapomniane doświadczenie
            kulinarnej podróży do serca Włoch!
          </p>
          <a href="/menu" className="px-8 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Sprawdź nasze menu
          </a>
        </div>
      </section>
    );
  }
  
  export default Hero;










