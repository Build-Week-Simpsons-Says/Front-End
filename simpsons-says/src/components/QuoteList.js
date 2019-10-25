import React, { useState } from "react"
import axios from "axios"
import QuoteCard from "./QuoteCard"
import styled from "styled-components"

const WrapperDiv = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    // background-color: pink;
    text-align: center;
    padding-top: 30px;
    height: 300px;
    width: 300px;
    font-size: 18px;
`

function QuoteList() {
    const [searchedQuote, setSearchedQuote] = useState("")
    const [quote, setQuote] = useState({})

    const handleChange = e => {
        setSearchedQuote(e.target.value)
    }

    const submitSearch = e => {
        e.preventDefault()
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://simpsons-quote-predictor.herokuapp.com/input?input_text=${searchedQuote}`
            )
            .then(res => setQuote(res.data))

            .catch(err => console.log("no go!", err))
    }

    return (
        <WrapperDiv className='Quote-List'>
            <form className='search-bar-form'>
                <input
                    onChange={handleChange}
                    name='quote'
                    placeholder='Use keywords to search'
                    type='text'
                    value={searchedQuote}
                />
                <button onClick={submitSearch}>Search</button>
            </form>

            <QuoteCard
                spoken_words={quote.spoken_words}
                raw_character_text={quote.raw_character_text}
            />
        </WrapperDiv>
    )
}

export default QuoteList
