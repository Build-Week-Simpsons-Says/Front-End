import React, {useState} from 'react'
import axios from 'axios'
import SearchedQuote from './SearchedQuote'
import Saved from './Saved'
import '../styling/SavedQuotes.scss'

const TestSearch = () => {

    const [searchedQuote, setSearchedQuote] = useState('');
    const [quote, setQuote] = useState({});
    const [savedQuote, setSavedQuote] = useState([]);

    const handleChange = e => {
        setSearchedQuote(e.target.value)    
    }

    const addtosaved = e => {
        setSavedQuote([...savedQuote, quote])
    }

    console.log(quote)
    console.log('added to saved',savedQuote);

    const submitSearch = e => {
        e.preventDefault();
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://simpsons-quote-predictor.herokuapp.com/input?input_text=${searchedQuote}`)
        .then(res => setQuote(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='top'>
            <form className='search-bar-form'>
                <input onChange={handleChange}
                name='quote'
                placeholder='Use keywords to search for a quote'
                type='text'
                value={searchedQuote}
                />
                <button onClick={submitSearch}>Search</button>
            </form>
            
            <div className='searched-quote'>
            <SearchedQuote spoken_words={quote.spoken_words} raw_character_text={quote.raw_character_text} />
            
            </div>
            <button onClick={addtosaved}>Save Quote</button>
            </div>
            {savedQuote.map(saved =>{
                return(
            <Saved spoken_words={saved.spoken_words} raw_character_text={saved.raw_character_text} />
            )})}
        </div>
    )
}

export default TestSearch; 