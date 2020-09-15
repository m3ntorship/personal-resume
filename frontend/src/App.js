import React from 'react';
import { TestComponent } from './components/TestComponent';
import { Section } from './components/BestExpertiseSection/Secton';
import { API } from './modules/apis';
import Card from './components/BestExpertiseSection/Card/Card';

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
    return <Card />;
  }
}
