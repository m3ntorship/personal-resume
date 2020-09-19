import React from 'react';
import Header from './components/Header/index.jsx';
// import { Prototype } from './components/TestComponent';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
// import { Prototype } from './components/TestComponent';
// import { API } from './modules/apis';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import Gallery from '../src/components/GalleryComponent/Gallery';
import { Navbar } from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        {/* <Prototype /> */}
        <AboutUs />
        <BestExpertiseSection />
        <Gallery />
        <EstimateSection />
      </div>
    );
  }
}
