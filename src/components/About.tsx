import { Stethoscope, Clock, HeartHandshake, Microscope } from 'lucide-react';
import aboutImg from '../assets/WhatsApp Image 2026-06-02 at 10.24.03 AM.jpeg';

const About = () => {
  const features = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Modern Equipment",
      desc: "Advanced dental technology"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Expert Doctors",
      desc: "Highly qualified specialists"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Gentle Care",
      desc: "Pain-free procedures"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      desc: "Open 7 days a week"
    }
  ];

  return (
    <section id="about" className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Why Choose Future Dental Care?
              </h3>
              <p className="text-text-muted font-sans text-lg leading-relaxed">
                At Future Dental Care, we combine state-of-the-art technology with compassionate care. Our goal is to provide you with the highest quality dental treatments in a relaxing and comfortable environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-navy-light border border-white/5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-text-muted text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p className="text-xl font-serif text-white italic">
                "Smile, It Increases Your Face Value"
              </p>
            </blockquote>
          </div>

          {/* Right Image Placeholder -> Replaced with Real Photo */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden group border-2 border-gold/10">
            <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={aboutImg} 
              alt="Future Dental Care Interior" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 z-20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
