import React from 'react';
import './Home.css';

import HistorySection from '../../components/HistorySection/HistorySection';
import VideoSection from '../../components/VideoSection/VideoSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return <div className="homePage">
    <HistorySection />
    <VideoSection />
    <ContactSection />
    <Footer />
  </div>
}

export default Home;
