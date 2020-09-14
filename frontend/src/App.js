import React from 'react';
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
    return this.state.navigation.map(({ title }) => (
      <div className="text-right text-sm">{title}</div>
    ));
  }
}
