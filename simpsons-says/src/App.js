import React, { useState } from "react"
import "react-router-dom"
import Quotes from "./components/Quotes"
import SearchQuotes from "./components/SearchQuotes"
import data from "./data"
import "./App.css"

function App() {
    const [quotes, setQuotes] = useState(data)

    const addNewQuote = quote => {
        setQuotes([...quotes, quote])
    }
    // passing the quotes down to our SavedQuotes with the above const

    return (
        <div className='App'>
            <h1>My Favorite Quotes</h1>
            <SearchQuotes addNewQuote={addNewQuote} />
            <Quotes Quotes={quotes} />
        </div>
    )
}

export default App
