import { useState } from 'react';
import { HelpCircle, X, Calendar, MapPin, Phone } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Book Appointment', href: '#contact' },
    { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Location', href: 'https://maps.google.com/?q=Future+Dental+Care+Srinivas+Complex,+4/2-307,+Kannagi+Nagar,+Angammal+Colony,+Salem,+Tamil+Nadu+636009', target: '_blank' },
    { icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Call', href: 'tel:9894425686' },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md p-2 border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex gap-2 justify-between">
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target={action.target || '_self'}
              rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="flex-1 bg-gold hover:bg-gold-light text-navy rounded-lg py-2.5 px-1 flex flex-row items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wide transition-colors"
            >
              {action.icon}
              <span className="truncate">{action.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Floating Action Button (Visible only on medium+ screens) */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:flex flex-col items-center gap-4">
        
        {/* Expanded Actions */}
        <div 
          className={`flex flex-col gap-3 transition-all duration-300 ease-out origin-bottom ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10 pointer-events-none'
          }`}
        >
          {actions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target={action.target || '_self'}
              rel={action.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="w-12 h-12 rounded-full bg-navy border border-gold/30 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(201,168,76,0.15)] hover:bg-gold hover:text-navy transition-all group relative"
              style={{ transitionDelay: isOpen ? `${(actions.length - 1 - index) * 50}ms` : '0ms' }}
            >
              {action.icon}
              
              {/* Tooltip */}
              <span className="absolute right-full mr-4 bg-navy text-white text-sm py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
                {action.label}
              </span>
            </a>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gold hover:bg-gold-light text-navy shadow-[0_0_20px_rgba(201,168,76,0.3)] flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        >
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 scale-0 absolute' : 'rotate-0 scale-100'}`}>
            <HelpCircle className="w-7 h-7" />
          </div>
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0 absolute'}`}>
            <X className="w-7 h-7" />
          </div>
        </button>

      </div>
    </>
  );
};

export default FloatingContact;
