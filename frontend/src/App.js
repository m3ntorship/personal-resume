import React from 'react';
// import EstimateSection from './components/EstimateSection';
import { Prototype } from './components/TestComponent';
// import { API } from './modules/apis';
// import { Navbar } from './components/Navbar';
import { UpdatedPosts } from './components/UpdatedPosts';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <UpdatedPosts />
        <Prototype />
      </div>
    );
  }
}
