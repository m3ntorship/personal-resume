import React from 'react';
import { HeaderComponent } from './components/Header/index.jsx';
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
        <HeaderComponent />;{<Prototype />}
      </div>
    );
  }
}
