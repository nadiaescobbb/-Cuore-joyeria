import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { WorkshopSection } from './components/WorkshopSection';
import { CategoryGrid } from './components/CategoryGrid';
import { WatchSection } from './components/WatchSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSection />
        <WorkshopSection />
        <CategoryGrid />
        <WatchSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

export default App;
