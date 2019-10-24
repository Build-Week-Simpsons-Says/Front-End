import React, { useState, useEffect } from "react"
import axios from "axios"
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"

function CharacterList() {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://simpsons-quote-predictor.herokuapp.com/input?input_text=${query}`
            )
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(error => {
                console.log("No GO!", error)
            })
    }, [])

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    return (
        <>
            <SearchForm handleInputChange={handleInputChange} query={query} />
            <div className='postCard-container'>
                return (
                <CharacterCard
                    character={data.raw_character_text}
                    quote={data.spoken_words}
                />
                ) })}
            </div>
        </>
    )
}

export default CharacterList
