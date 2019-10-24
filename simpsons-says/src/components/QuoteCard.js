import React from "react"

function QuoteCard(props) {
    console.log(props, "quote-card")
    return (
        <form>
            <h4>{props.spoken_words}</h4>
            <p>{props.raw_character_text}</p>
            <button>Save Quote</button>
        </form>
    )
}

export default QuoteCard
