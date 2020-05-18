import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { FormationCalc } from './components/formation_calc';
import { Layout } from './components/layout';
import { Provider } from 'react-redux';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
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
          <div id="form-calc-wrapper">
            <FormationCalc />
          </div>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
