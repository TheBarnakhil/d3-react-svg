import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SvgComponent } from './SvgComponent';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutingSvg } from './RoutingSvg';
import { D3Test } from './D3Test';
import { PlainD3 } from './PlainD3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
          <Routes>

          <Route path="/routing" Component={RoutingSvg}  />
          <Route path="/d3" Component={D3Test}  />
          <Route path="/plaind3" Component={PlainD3}  />
          <Route path="/" Component={SvgComponent} />
          </Routes>
          {/* <SvgComponent /> */}
      </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
