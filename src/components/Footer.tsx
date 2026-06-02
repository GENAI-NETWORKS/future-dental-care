import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/futurelogo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-[#080C18] border-t-2 border-gold pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Future Dental Care Logo" className="w-12 h-12 object-contain rounded-md" />
              <span className="font-sans font-bold text-lg tracking-wider text-white">FUTURE DENTAL CARE</span>
            </div>
            <p className="text-text-muted font-sans italic border-l-2 border-gold/30 pl-4">
              "Smile, It Increases Your Face Value"
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-white font-bold mb-4 font-serif text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Doctors', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-muted hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-4 font-serif text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-text-muted leading-relaxed">
                  Future Dental Care Srinivas Complex, 4/2-307,<br />Kannagi Nagar, Angammal Colony,<br />Salem, Tamil Nadu 636009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:09894425686" className="text-text-muted hover:text-gold transition-colors">
                  98944 25686
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:futuredentalcare2022@gmail.com" className="text-text-muted hover:text-gold transition-colors">
                  futuredentalcare2022@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted/60 text-sm">
            © 2025 Future Dental Care. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
