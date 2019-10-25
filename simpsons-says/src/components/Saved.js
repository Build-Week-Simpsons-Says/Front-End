import React from "react"
import tvicon from '../Images/simpsonstv.png'
import '../styling/SavedQuotes.scss'

const Saved = props => {
    return (
        <div className='saved-quote'>
           
            <img src={tvicon}/>
            <h4>"{props.spoken_words}"</h4>
            <h4>-{props.raw_character_text}</h4>
            
        </div>
    )
}

export default Saved;
