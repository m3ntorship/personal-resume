import React from 'react';
import WorkProcess from './components/WorkProcessSection';
import Header from './components/Header/index.jsx';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import Gallery from '../src/components/GalleryComponent/Gallery';
import { BestDesignQuality } from '../src/components/best-design-quality/index';
import { Navbar } from './components/Navbar';
import { UpdatedPosts } from './components/UpdatedPosts';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <WorkProcess />
        <BestExpertiseSection />
        <Gallery />
        <EstimateSection />
        <BestDesignQuality />
        <UpdatedPosts />
        <Form />
        <Footer />
      </div>
    );
  }
}
