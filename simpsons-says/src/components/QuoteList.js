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
    width: 25%;
    font-size: 18px;
    button{
        display:inline-block;
        width: 20%;
        margin: 0 auto;
        height: 30px;
        font-size: 1.5rem;
        border-radius: 5px;
        font-weight:bold;
        background-color:#EB589D;
        color: white;
        transition: color 0.2s linear;
        -webkit-transition: color 0.2s linear;
        -moz-transition: color 0.2s linear;
    }
    button:hover{
        background-color:white;
        color: #EB589D;
    }
    input{
        margin: 0 10px;
        height: 30px;
        border-radius: 5px;
        background-color: #70d1fe;
        border: 1px solid black;
        text-align:center;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.281);
        font-size: 1.2rem;
        font-weight: bold;

    }
    
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
            
            <QuoteCard
                spoken_words={quote.spoken_words}
                raw_character_text={quote.raw_character_text}
            />
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

            
        </WrapperDiv>
    )
}

export default QuoteList
