import React from 'react';
import { Navbar } from './components/Navbar/index';
import Header from './components/Header/index.jsx';
import AboutUs from './components/AboutUsSection/AboutUs';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import EstimateSection from './components/EstimateSection';
import Gallery from '../src/components/GalleryComponent/Gallery';
import { UpdatedPosts } from './components/UpdatedPosts';
import { BestDesignQuality } from '../src/components/best-design-quality/index';
import { Footer } from './components/Footer';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <BestExpertiseSection />
        <EstimateSection />
        <Gallery />
        <UpdatedPosts />
        <BestDesignQuality />
        <UpdatedPosts />
        <Footer />
        {/* <Prototype /> */}
      </div>
    );
  }
}
