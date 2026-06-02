import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Hours from './components/Hours';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import heroVideo from './assets/Cinematic_slow_motion_video_S.mp4';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-text-primary selection:bg-gold/30 selection:text-gold-light relative">
      
      {/* Global Fixed Background Video */}
      <div className="fixed inset-0 -z-50 bg-navy">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Subtle overlay to darken the video site-wide */}
        <div className="absolute inset-0 bg-navy/60"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Doctors />
        <Gallery />
        <Reviews />
        <Hours />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
