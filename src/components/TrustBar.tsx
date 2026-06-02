const TrustBar = () => {
  const items = [
    "Root Canal Treatment",
    "Dental Implants",
    "Laser Treatment",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Teeth Whitening",
    "Flap Surgery",
    "Dentures"
  ];

  return (
    <div className="bg-navy-light border-y border-gold/20 py-4 overflow-hidden relative flex whitespace-nowrap">
      <div className="animate-marquee flex items-center">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-gold font-sans font-medium tracking-widest uppercase text-sm">
              {item}
            </span>
            <span className="mx-6 text-gold/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
