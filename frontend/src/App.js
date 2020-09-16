import React from 'react';
import Gallery from './components/GalleryComponent/Gallery';
import { TestComponent } from './components/TestComponent';
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
        <TestComponent />
        <Gallery />
      </div>
    );
  }
}
