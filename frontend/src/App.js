import React from 'react';
import { Prototype } from './components/TestComponent';
import { API } from './modules/apis';
// import componanets
// Navbar component
import { Navbar } from './components/Navbar/Navbar';
import { UpdatedPosts } from './components/UpdatedPosts';
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
        <Navbar />
        <UpdatedPosts />
      </div>
    );
  }
}
