import React from "react"
import { Card, CardTitle, CardText, Button } from "reactstrap"

function CharCard(props) {
    return (
        <div className='card-container'>
            <Card className='card'>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.body}</CardText>
            </Card>
            <Button className='save-quote' type='submit'>
                Save Quote
            </Button>
        </div>
    )
}

export default CharCard
