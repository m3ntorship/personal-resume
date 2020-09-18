import React from 'react';
// import { Prototype } from './components/TestComponent';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
import { Prototype } from './components/TestComponent';
import { API } from './modules/apis';

export default class App extends React.Component {
  state = {
    navigation: []
  };
  componentDidMount() {
    API('/navigation').then(({ data: navigation }) => {
      this.setState({ navigation });
    });
  }
  render() {
    return (
      <div>
        {/* <Prototype /> */}
        <AboutUs />
        <BestExpertiseSection />
        <EstimateSection />
      </div>
    );
  }
}
