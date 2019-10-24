import React from 'react';

const SearchedQuote = props => {


    return (
        <div className='searched-quote'>
            <h4>{props.spoken_words}</h4>
            <p>-{props.raw_character_text}</p>
        </div>
    )
}

export default SearchedQuote;