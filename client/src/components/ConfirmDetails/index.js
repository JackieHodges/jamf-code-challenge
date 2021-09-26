import React from "react";
import { Form, Button } from "react-bootstrap";

function ConfirmDetails(props) {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" plaintext readOnly defaultValue="email@example.com"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Usergroup">
                <Form.Label>USER GROUP</Form.Label>
                <Form.Control type="text" plaintext readOnly defaultValue="email@example.com" />
            </Form.Group>

            <Button onClick={props.onClick} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ConfirmDetails;