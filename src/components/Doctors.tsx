import { Phone } from 'lucide-react';
import imgBalaji from '../assets/Dr. K.C. Balaji Raja.png';
import imgSaradha from '../assets/Dr. R. Saradha.png';

const Doctors = () => {
  const doctors = [
    {
      image: imgBalaji,
      name: "Dr. K.C. Balaji Raja",
      degree: "BDS",
      specialty: "Dental Surgeon",
      phone: "98944 25686",
      desc: "Experienced dental surgeon specializing in general and restorative dentistry. Dedicated to providing comprehensive and gentle dental care."
    },
    {
      image: imgSaradha,
      name: "Dr. R. Saradha",
      degree: "MDS",
      specialty: "Periodontist & Implantologist",
      phone: "98944 25686",
      desc: "Expert periodontist and implantologist with advanced specialization in gum health and permanent dental implants."
    }
  ];

  return (
    <section id="doctors" className="py-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Our Experts</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Meet Our Specialists
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doc, idx) => (
            <div 
              key={idx}
              className="group relative bg-navy-light/50 backdrop-blur-md border-t-4 border-t-gold border-x border-b border-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gold flex items-center justify-center bg-navy group-hover:scale-105 transition-transform duration-300">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-gold/20 scale-110 group-hover:scale-105 group-hover:border-gold/40 transition-all duration-500"></div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors">
                      {doc.name}
                    </h4>
                    <p className="text-sm font-bold text-white/70 tracking-wide">{doc.degree}</p>
                    <p className="text-gold font-medium mt-1">{doc.specialty}</p>
                  </div>
                  
                  <p className="text-text-muted text-sm leading-relaxed">
                    {doc.desc}
                  </p>

                  <div className="pt-4 flex items-center justify-center sm:justify-start gap-2 text-text-primary">
                    <Phone className="w-4 h-4 text-gold" />
                    <a href={`tel:${doc.phone.replace(/\s/g, '')}`} className="font-bold hover:text-gold transition-colors">
                      {doc.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
