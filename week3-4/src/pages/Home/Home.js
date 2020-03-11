import React from 'react';
import './Home.css';

import HistorySection from '../../components/HistorySection/HistorySection';
import VideoSection from '../../components/VideoSection/VideoSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import HomeSection from '../../components/Home/Home';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return <div className="homePage">
    <HomeSection />
    <HistorySection id="history"/>
    <VideoSection />
    <ContactSection />
  </div>
}

export default Home;
