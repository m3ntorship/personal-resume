import React from 'react';
import Navbar from './components/Navbar/index';
import Header from './components/Header/index.jsx';
import AboutUs from './components/AboutUsSection/AboutUs';
import WorkProcess from './components/WorkProcessSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import EstimateSection from './components/EstimateSection';
import Gallery from '../src/components/GalleryComponent/Gallery';
import BestDesignQuality from './components/BestDesignQuality/index';
import UpdatedPosts from './components/UpdatedPosts';
import Form from './components/Form';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar />
        <Header />
        <AboutUs />
        <WorkProcess />
        <BestExpertiseSection /> */}
        <EstimateSection />
        {/* <Gallery />
        <BestDesignQuality />
        <UpdatedPosts />
        <Form />
        <Footer /> */}
      </div>
    );
  }
}
