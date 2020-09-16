import React from 'react';
// import { TestComponent } from './components/TestComponent';
import { HeaderComponent } from './components/Header/index.jsx';
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
    return <HeaderComponent />;
  }
}
