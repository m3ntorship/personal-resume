import React from 'react';
import { TestComponent } from './components/TestComponent';
import { API } from './modules/apis';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';

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
    return <BestExpertiseSection />;
  }
}
