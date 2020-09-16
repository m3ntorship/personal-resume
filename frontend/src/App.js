import React from 'react';
import AboutUs from './components/AboutUsSection/AboutUs';
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
        <AboutUs />
        <Prototype />
      </div>
    );
  }
}
