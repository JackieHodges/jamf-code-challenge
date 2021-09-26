import React from "react";
import { Form } from "react-bootstrap";

function StartingForm(props) {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="[Required]" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="[Required]" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="VerifyPassword">
                <Form.Label>VERIFY PASSWORD</Form.Label>
                <Form.Control type="password" placeholder="[Required]" />
            </Form.Group>
        </Form>
    )
}

export default StartingForm;