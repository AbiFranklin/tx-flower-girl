import React from 'react';
import './App.css';
import ContactForm from '../src/Components/Form'
import Menu from '../src/Components/Menu'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <ContactForm />
      </div>
    );
  }
}

export default App;
