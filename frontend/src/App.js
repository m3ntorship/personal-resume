import React from 'react';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection'
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
        <Prototype />
        <BestExpertiseSection />
      </div>
    );
  }
}
