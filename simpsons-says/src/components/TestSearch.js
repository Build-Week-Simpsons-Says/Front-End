import React, {useState} from 'react'
import axios from 'axios'
import SearchedQuote from './SearchedQuote'

const TestSearch = () => {

    const [searchedQuote, setSearchedQuote] = useState('');
    const [quote, setQuote] = useState({});

    const handleChange = e => {
        setSearchedQuote(e.target.value)
        
    }

    const submitSearch = e => {
        e.preventDefault();
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://simpsons-quote-predictor.herokuapp.com/input?input_text=${searchedQuote}`)
        .then(res => setQuote(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form className='search-bar-form'>
                <input onChange={handleChange}
                name='quote'
                placeholder='Use keywords to search for a quote'
                type='text'
                value={searchedQuote}
                />
                <button onClick={submitSearch}>Search</button>
            </form>
            <SearchedQuote spoken_words={quote.spoken_words} raw_character_text={quote.raw_character_text} />
        </div>
    )
}

export default TestSearch; 