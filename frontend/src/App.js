import React from 'react';
import { Prototype } from './components/TestComponent';
import { API } from './modules/apis';
import Gallery from '../src/components/GalleryComponent/Gallery';

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
        <div>
          <div>{/* <Prototype /> */}</div>;
          <Gallery />
        </div>
      </div>
    );
  }
}
