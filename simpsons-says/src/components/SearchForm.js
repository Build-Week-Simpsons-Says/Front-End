import React from "react"
import { Button, Form, Input } from "reactstrap"

export default function SearchForm(props) {
    return (
        <Form className='search-form'>
            <Input
                type='text'
                onChange={props.handleInputChange}
                placeholder='search for your favorite quote'
                autoComplete='off'
                value={props.query}
            />
        </Form>
    )
}
