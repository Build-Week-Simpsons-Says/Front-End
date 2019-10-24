import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.scss"
import Login from "./components/Login"
import Register from "./components/Register"
import SimpsonsWelcome from "./components/SimpsonsWelcome"
import CharacterList from "./components/CharacterList"
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import TestSearch from './components/TestSearch'

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
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <TestSearch />
                </div>
                <Switch>
                    <Route exact path='/' component={SimpsonsWelcome} />
                    <Route path='/characterlist' component={CharacterList} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <PrivateRoute path='/profile' component={Profile} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
