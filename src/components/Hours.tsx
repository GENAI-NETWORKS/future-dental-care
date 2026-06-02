import { useState } from 'react';
import { MapPin, Phone, Send, Clock } from 'lucide-react';

const Hours = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'General Enquiry',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, service, message } = formData;
    
    // Construct WhatsApp message
    const waMessage = `*New Enquiry from Website*%0A%0A*Name:* ${name}%0A*Service:* ${service}%0A*Message:* ${message}`;
    const waUrl = `https://wa.me/919894425686?text=${waMessage}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-navy/20 relative overflow-hidden">
      {/* Radial Gold Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: CTA & Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Visit Us</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight text-glow">
                Ready for a Healthier Smile?
              </h3>
              <p className="text-xl text-text-primary/90 font-sans mb-10 leading-relaxed max-w-lg">
                Book your appointment today - open 7 days a week, 9 AM to 9 PM. Your perfect smile awaits.
              </p>
              
              <a 
                href="tel:09894425686" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <Phone className="w-5 h-5 relative z-10" />
                <span className="text-lg relative z-10">Call Now: 98944 25686</span>
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-white font-bold">Hours</h4>
                </div>
                <div className="pl-13 text-sm text-text-muted space-y-1">
                  <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                  <p className="text-gold font-medium">Sun: By Appointment Only</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-white font-bold">Location</h4>
                </div>
                <div className="pl-13 text-sm text-text-muted space-y-1">
                  <p>Srinivas Complex, 4/2-307,</p>
                  <p>Kannagi Nagar, Salem 636009</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="bg-navy-light/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-10 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h4 className="text-3xl font-serif text-white mb-2 relative z-10">
              Quick Enquiry
            </h4>
            <p className="text-text-muted mb-8 relative z-10">
              Send us a message and we'll reply directly on WhatsApp.
            </p>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5 relative z-10">
              <div>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-navy/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                />
              </div>
              <div>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-navy/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Orthodontic Treatment">Orthodontic Treatment</option>
                  <option value="Tooth Extraction">Tooth Extraction</option>
                </select>
              </div>
              <div>
                <textarea 
                  required
                  placeholder="How can we help you?" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-navy/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-fit mx-auto bg-gold text-navy font-bold rounded-xl px-8 py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <Send className="w-5 h-5" /> Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hours;
