import { Shield } from "lucide-react";

const Hero = () => {
  const scrollToVerifier = () => {
    document.getElementById('verifier')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden gradient-primary py-20 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Más de 2 millones de emails verificados</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            ¿Tu información personal está en riesgo?
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Verifica gratis si tu email apareció en filtraciones de datos
          </p>
          
          <button 
            onClick={scrollToVerifier}
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-smooth shadow-glow hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            Verificar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
