import React from 'react';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import Gallery from '../src/components/GalleryComponent/Gallery';
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
      </div>
    );
  }
}
