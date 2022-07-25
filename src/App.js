import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Section from './components/Section'
import ItemCount from './components/ItemCount';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Section />
          <ItemCount />
        </Router>
       </div>
    );
  }
}

export default App;
