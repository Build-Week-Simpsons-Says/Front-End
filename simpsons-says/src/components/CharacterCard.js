import React from "react"
import { Card, CardTitle, CardText } from "reactstrap"

function CharCard(props) {
    return (
        <div className='card-container'>
            <Card className='card'>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.body}</CardText>
            </Card>
        </div>
    )
}

export default CharCard
