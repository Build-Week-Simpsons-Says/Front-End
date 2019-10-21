import React, { useState } from "react"

const SavedQuotes = props => {
    const [quote, setQuote] = useState({
        title: "",
        body: "",
    })
    // event property is something that comes with event listeners sometimes seen as e. we did event.target.name so we are grabbing the title w name
    const changeHandler = event => {
        // console.log(event.target.value);
        setQuote({ ...quote, [event.target.name]: event.target.value })
        // console.log(quote);
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewQuote(quote)
        setQuote({ title: "", body: "" })
        // this clears it out to empty string after
    }
    // event.target.value will give us the input (ie Hello)
    return (
        <form onSubmit={submitForm}>
            <label htmlFor='title'>Title</label>
            <input
                name='title'
                id='title'
                type='text'
                placeholder='title'
                onChange={changeHandler}
                value={quote.title}
            />
            <label htmlFor='body'>Description</label>
            <textarea
                name='body'
                id='body'
                placeholder='Type your note here'
                onChange={changeHandler}
                value={quote.body}
            />
            <button type='submit'>Save Quote</button>
        </form>
    )
}

export default SavedQuotes
