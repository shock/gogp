import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { FormationForm } from './components/formation_form';
import { Layout } from './components/layout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Layout title="Form Calc Prototype">
        <div id="form-wrapper">
          <FormationForm value='change me now' />
        </div>
      </Layout>
    </div>
  );
}

export default App;