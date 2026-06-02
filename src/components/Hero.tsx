import { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background is now global in App.tsx */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/50"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center mt-[-5vh]">
        <div className={`space-y-4 transition-all duration-1000 transform flex flex-col items-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/60 backdrop-blur-md border border-gold/30 mt-8">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-text-primary">5.0 Rating · Salem's Premier Dental Clinic</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white leading-tight drop-shadow-2xl">
              Your Perfect Smile
            </h1>
            <h2 className="text-4xl sm:text-6xl font-serif text-gold text-glow drop-shadow-lg">
              Starts Here
            </h2>
          </div>

          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl font-sans leading-relaxed drop-shadow-md font-light">
            Comprehensive dental care in a comfortable, friendly, and professional environment. Advanced treatments, gentle care, lasting smiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
              Our Services
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:gap-16">
            <div>
               <p className="text-4xl font-serif text-white drop-shadow-lg">10+</p>
               <p className="text-sm text-white/80 mt-2 uppercase tracking-widest font-medium">Years Experience</p>
            </div>
            <div>
               <p className="text-4xl font-serif text-white drop-shadow-lg">5k+</p>
               <p className="text-sm text-white/80 mt-2 uppercase tracking-widest font-medium">Happy Patients</p>
            </div>
            <div>
               <p className="text-4xl font-serif text-white drop-shadow-lg">5.0<span className="text-gold text-3xl ml-1">★</span></p>
               <p className="text-sm text-white/80 mt-2 uppercase tracking-widest font-medium">Google Rating</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
