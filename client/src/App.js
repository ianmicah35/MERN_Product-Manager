import React from 'react';
// import Create from '../src/views/Create';
import Main from '../src/views/Main';
import Update from '../src/views/Update';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h3>Product Manager</h3>
      <Router>
        <Main path="/" />
        {/* <Main path="/new" /> */}
        <Update path="/:_id/update" />
      </Router>
    </div></div>
  );
}

export default App;

