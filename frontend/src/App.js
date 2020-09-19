import React from 'react';
import EstimateSection from './components/EstimateSection';
// import { Prototype } from './components/TestComponent';
import WorkProcess from './components/WorkProcessSection';
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
        <WorkProcess />
        <Prototype />
      </div>
    );
  }
}
