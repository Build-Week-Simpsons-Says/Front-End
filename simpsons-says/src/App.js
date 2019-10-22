import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"
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
                    <Route path='/characterlist' component={CharacterList} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
