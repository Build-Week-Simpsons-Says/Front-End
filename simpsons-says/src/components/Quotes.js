import React from "react"

const Quotes = props => {
    console.log(props)
    return (
        <div className='quote-list'>
            {props.Quotes.map((quote, index) => {
                return (
                    <div className='quote' key={index}>
                        {/* passed in index to be the key */}
                        <h2>{quote.title}</h2>
                        <p>{quote.body}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Quotes
