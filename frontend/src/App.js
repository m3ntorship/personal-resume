import React from 'react';
// import EstimateSection from './components/EstimateSection';
import { Prototype } from './components/TestComponent';
// import { API } from './modules/apis';
import { Navbar } from './components/Navbar';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Prototype />
      </div>
    );
  }
}
