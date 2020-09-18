import React from 'react';
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
    return (
      <div>
        {/* <Prototype /> */}
        <BestExpertiseSection />
      </div>
    );
  }
}
