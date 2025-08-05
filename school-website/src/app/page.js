import Header from '../components/Header';
import Footer from '../components/Footer';
import AnnouncementBar from '../components/AnnouncementBar';
import HeroSection from '../components/HeroSection';
import QuickLinks from '../components/QuickLinks';
import NewsSection from '../components/NewsSection';
import EventsSection from '../components/EventsSection';

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <QuickLinks />
        <NewsSection />
        <EventsSection />
      </main>

      <Footer />
    </>
  );
}