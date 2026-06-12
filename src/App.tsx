import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { WorkshopSection } from './components/WorkshopSection';
import { RepairSection } from './components/RepairSection';
import { CategoryGrid } from './components/CategoryGrid';
import { WatchSection } from './components/WatchSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSection />
        <WorkshopSection />
        <RepairSection />
        <CategoryGrid />
        <WatchSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
