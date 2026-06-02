import { 
  Shield, 
  Zap, 
  SmilePlus, 
  Sparkles, 
  Stethoscope, 
  Activity,
  Scissors,
  Syringe,
  ClipboardEdit,
  X
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Root Canal Treatment",
      desc: "Pain-free procedure to save infected teeth",
      icon: <Activity className="w-8 h-8" />
    },
    {
      title: "Dental Implants",
      desc: "Permanent, natural-looking tooth replacements",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Laser Treatment",
      desc: "Advanced precision laser dental procedures",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Orthodontic Treatment",
      desc: "Braces and aligners for straighter smiles",
      icon: <SmilePlus className="w-8 h-8" />
    },
    {
      title: "Dentures",
      desc: "Custom-fitted fixed & removable dentures",
      icon: <ClipboardEdit className="w-8 h-8" />
    },
    {
      title: "Flap Surgery",
      desc: "Expert periodontal gum care and treatment",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Tooth Whitening",
      desc: "Professional-grade whitening treatments",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Tooth Filling",
      desc: "Durable, aesthetic dental fillings",
      icon: <Syringe className="w-8 h-8" />
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Full smile makeovers and aesthetic treatments",
      icon: <Stethoscope className="w-8 h-8" />
    },
    {
      title: "Tooth Extraction",
      desc: "Safe and painless tooth removal procedures",
      icon: <X className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-12 bg-navy/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Our Dental Services
          </h3>
          <p className="text-text-muted font-sans text-lg">
            Comprehensive dental care tailored to your specific needs, using the latest technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="group bg-navy rounded-2xl p-8 border-l-4 border-l-gold/50 border-y border-y-white/5 border-r border-r-white/5 hover:border-l-gold hover:bg-navy-lighter transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg shadow-black/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
