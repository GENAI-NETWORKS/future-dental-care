import img3 from '../assets/WhatsApp Image 2026-06-02 at 10.24.04 AM (1).jpeg';
import img4 from '../assets/WhatsApp Image 2026-06-02 at 10.24.04 AM.jpeg';
import img5 from '../assets/WhatsApp Image 2026-06-02 at 10.24.05 AM (1).jpeg';
import img6 from '../assets/WhatsApp Image 2026-06-02 at 10.24.05 AM.jpeg';
import img7 from '../assets/WhatsApp Image 2026-06-02 at 10.24.06 AM.jpeg';

const Gallery = () => {
  const images = [img3, img4, img5, img6, img7];

  return (
    <section id="gallery" className="py-24 bg-navy/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Our Facility</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Clinic Gallery
          </h3>
          <p className="text-text-muted font-sans text-lg">
            Experience our modern, clean, and welcoming environment designed for your comfort.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="relative group overflow-hidden rounded-2xl border border-white/5 break-inside-avoid"
            >
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={src} 
                alt={`Clinic Interior ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              {/* Subtle gold border glow effect on hover */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-2xl transition-all duration-500 z-20 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
