import React from "react";
import { Form, Button } from "react-bootstrap";

function UserGroupDropdown(props) {

    return (
        <div>
            <h3>Choose the User Group</h3>
            <Form>
                <Form.Group className="mb-3" controlId="Usergroup">
                    <Form.Label>User Group</Form.Label>
                    <Form.Text className="text-muted">
                        User group to add the users to
                    </Form.Text>
                    <Form.Select aria-label="Default select example">
                        <option>None</option>
                        {props.userGroups.map(data => (
                            <option key={data.id} value={data.name}>{data.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button onClick={props.onClick} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UserGroupDropdown;