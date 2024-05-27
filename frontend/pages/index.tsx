// index.tsx
import React from 'react';

// Import your components
import Header from '../components/Header';
import Introduction from '../components/HeaderContent';
import SearchFilter from '../components/SearchFilter';
import Testimonials from '../components/Testimonial';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flexShrink: 0 }}>
        <Header />
      </div>
      <div style={{ overflowY: 'auto' }}>
        <Introduction />
        <SearchFilter />
        <Testimonials />
        <Footer />
      </div>
      {/* <Popup /> */}
    </div>
  );
};

export default LandingPage;