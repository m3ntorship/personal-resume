import React from 'react';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import Gallery from '../src/components/GalleryComponent/Gallery';
import {BestDesignQuality} from '../src/components/best-design-quality/index';
import { Navbar } from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutUs />
        <BestExpertiseSection />
        <Gallery />
        <EstimateSection />
        <BestDesignQuality />
      </div>
    );
  }
}
