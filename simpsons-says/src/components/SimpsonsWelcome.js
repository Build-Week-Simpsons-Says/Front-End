import React from "react"
import Woohoo from '../Images/homerSimpsonExcited.jpg'

export default function SimpsonsWelcome() {
    return (
        <section className='simpsons-welcome'>
            <header>
                <h1>Welcome to the ultimate Simpsons fan site!</h1>
                <img
                    className='main-img'
                    src={Woohoo}
                    alt='woohoo'
                />
            </header>
        </section>
    )
}
