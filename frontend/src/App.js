import React from 'react';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection'
import { Prototype } from './components/TestComponent';
import { API } from './modules/apis';
import { Navbar } from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Prototype />
        <Navbar />
        <BestExpertiseSection />
        <EstimateSection />
      </div>
    );
  }
}
