import React from "react"

export default function SearchForm(props) {
    return (
        <form className='search-form'>
            <input
                type='text'
                onChange={props.handleInputChange}
                placeholder='search for your favorite quote'
                autoComplete='off'
                value={props.query}
            />
        </form>
    )
}
