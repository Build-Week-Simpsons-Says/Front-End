import React from "react"
import { Card, CardTitle, CardText, Button } from "reactstrap"

function CharCard(props) {
    return (
        <div className='card-container'>
            <Card className='card'>
                <CardTitle>{props.character}</CardTitle>
                <CardText>{props.quote}</CardText>
            </Card>
            <Button className='save-quote' type='submit'>
                Save Quote
            </Button>
        </div>
    )
}

export default CharCard
