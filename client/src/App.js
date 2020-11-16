import React from 'react';
// import Create from '../src/views/Create';
import Main from '../src/views/Main';
import Update from '../src/views/Update';
import Detail from '../src/views/Detail';
import Delete from '../src/views/Delete';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Product Manager</h3>
          <br></br>
          <Router>
            <Main path="/" />
            <Update path="/api/product/:_id/update" />
            <Detail path="/api/product/:_id/detail" />
            <Delete path="/api/product/:_id/delete" />
          </Router>
    </div></div>
  );
}

export default App;

