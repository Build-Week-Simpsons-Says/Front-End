import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Login} />
        <Route path ="/register" component={Register} /> 
      </Router>
    </div>
  );
}

export default App;
