import React, { useState } from "react"
import QuoteList from "./QuoteList"

function QuoteCard(props) {
    return (
        <form>
            <h4>{props.spoken_words}</h4>
            <p>{props.raw_character_text}</p>
            <button>Save Quote</button>
        </form>
    )
}

export default QuoteCard
