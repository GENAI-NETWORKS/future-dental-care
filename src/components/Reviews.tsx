import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    { name: "John Doe", text: "Excellent dental care! The doctors are highly professional and the clinic is exceptionally clean.", date: "2 months ago" },
    { name: "Priya S.", text: "Painless root canal treatment. Dr. Balaji Raja explained everything clearly. Highly recommended.", date: "1 month ago" },
    { name: "Karthik M.", text: "Got my dental implants done by Dr. Saradha. Fantastic experience and great results.", date: "3 weeks ago" },
    { name: "Anita Raj", text: "Very gentle care and flexible timings. It's the best dental clinic I've visited in Salem.", date: "2 months ago" },
    { name: "Ramesh K.", text: "Modern equipment and friendly staff. They really care about your dental health.", date: "4 months ago" },
    { name: "Lakshmi V.", text: "Great aesthetic dentistry work. My smile looks better than ever. Thank you!", date: "1 week ago" },
    { name: "Suresh P.", text: "Affordable and transparent pricing. 5 stars for the amazing service and hygiene.", date: "5 months ago" }
  ];

  return (
    <section id="reviews" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Rating Stats */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">
              What Our Patients Say
            </h3>
          </div>
          
          <div className="bg-navy p-6 rounded-2xl border border-white/5 flex items-center gap-6 shrink-0">
            <div className="text-5xl font-serif font-bold text-gold">5.0</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-text-muted font-medium">18 Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative overflow-hidden group py-4">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((review, idx) => (
              <div 
                key={idx} 
                className="shrink-0 w-[350px] md:w-[400px] bg-navy rounded-2xl p-8 border border-white/5 relative group/card hover:border-gold/30 transition-colors"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20 group-hover/card:text-gold/40 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-text-primary text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-text-muted text-sm">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
