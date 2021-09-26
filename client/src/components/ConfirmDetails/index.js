import React from "react";
import { Form } from "react-bootstrap";

function ConfirmDetails(props) {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" plaintext readOnly defaultValue={props.userData.email}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Usergroup">
                <Form.Label>USER GROUP</Form.Label>
                <Form.Control type="text" plaintext readOnly defaultValue={props.userData.usergroup} />
            </Form.Group>
        </Form>
    )
}

export default ConfirmDetails;