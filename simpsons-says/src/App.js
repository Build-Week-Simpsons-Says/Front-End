<<<<<<< HEAD
import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"
import SimpsonsWelcome from "./components/SimpsonsWelcome"
import CharacterList from "./components/CharacterList"

function App() {
    return (
        <Router>
            <div>
                <nav className='main-nav'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/characterlist'>Search Quotes</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={SimpsonsWelcome} />
                    <Route path='/characterlist' component={CharacterList} />
                </Switch>
            </div>
        </Router>
    )
=======
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
>>>>>>> master
}

export default App
