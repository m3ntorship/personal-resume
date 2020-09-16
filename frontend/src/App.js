import React from 'react';
<<<<<<< HEAD
import Gallery from './components/GalleryComponent/Gallery';
import { TestComponent } from './components/TestComponent';
=======
import { Prototype } from './components/TestComponent';
>>>>>>> cf1ed311849a92f521eff5297900823659a959bc
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
<<<<<<< HEAD
    return (
      <div>
        <TestComponent />
        <Gallery />
      </div>
    );
=======
    return <div>{/* <Prototype /> */}</div>;
>>>>>>> cf1ed311849a92f521eff5297900823659a959bc
  }
}
