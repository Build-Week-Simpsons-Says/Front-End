import React, { useState } from "react"
import '../styling/Quote.scss'

function QuoteCard(props) {
    return (
        <div className='quote-container'>
            <h2>Quotes</h2>
            <h3>{props.spoken_words}</h3>
            <h4>{props.raw_character_text}</h4>
            {/* <button>Save Quote</button> */}
        </div>
    )
}

export default QuoteCard;
