import React from 'react';
import './Home.css';
<<<<<<< HEAD
import HistorySection from '../../components/HistorySection/HistorySection';
import VideoSection from '../../components/VideoSection/VideoSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';

const Home = () => (
  <div className="homePage">
    <HistorySection />
    <VideoSection />
    <ContactSection />
    <Footer />
  </div>
=======
import HistorySection from './components/HistorySection/HistorySection';

const Home = () => (
  <HistorySection />
>>>>>>> 29d80e73a2a0176423a03553ebbff9a3f9c13e3a
);

export default Home;
