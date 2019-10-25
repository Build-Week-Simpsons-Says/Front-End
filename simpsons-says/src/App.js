import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.scss"
import Login from "./components/Login"
import Register from "./components/Register"
import SimpsonsWelcome from "./components/SimpsonsWelcome"
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import TestSearch from './components/TestSearch'
import SimpsonsNav from './components/SimpsonNav'
import QuoteList from './components/QuoteList'



function App() {
    return (
        <Router>

              
                <div>
                    <SimpsonsNav />
                    {/* <TestSearch /> */}
                </div>

                <Switch>
                    <Route exact path='/' component={SimpsonsWelcome} />
                    <Route path='/quotes' component={QuoteList} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <PrivateRoute exact path='/profile' component={Profile} />
                </Switch>
            

        </Router>
    )
}

export default App
