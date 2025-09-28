import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import FreeChatSection from './components/FreeChatSection';
import TherapySection from './components/TherapySection';
import ResourcesSection from './components/ResourcesSection';
import CommunitySection from './components/CommunitySection';
import VolunteerSection from './components/VolunteerSection';
import Footer from './components/Footer';
import { ToastProvider } from './components/ui/toast';

function App() {
  return (
    <div className="min-h-screen">
      <ToastProvider />
      <Header />
      <main>
        <HeroSection />
        <ServiceCards />
        <FreeChatSection />
        <TherapySection />
        <ResourcesSection />
        <CommunitySection />
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;