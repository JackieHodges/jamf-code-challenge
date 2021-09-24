import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

function Sidebar(props) {

    if (props.step === "first") {
        console.log("first")
    }

    return (
        <Container className="sideBar" style={{ padding: 100 }}>
            <Row>
                <Col>
                    <div id="first" style={{ textAlign: "right", color: "green" }}>0</div>
                </Col>
                <Col>
                    <div>Add Login Details</div>
                </Col>
            </Row>
            <Row>
            <Col>
                    <div className="second" style={{ textAlign: "right", color: "grey" }}>0</div>
                </Col>

                <Col>
                    Select the User Group
                </Col>
            </Row>
            <Row>
            <Col>
                    <div className="third" style={{ textAlign: "right", color: "grey" }}>0</div>
                </Col>

                <Col>
                    Submit the Form
                </Col>
            </Row>
        </Container>
    )
}

export default Sidebar;