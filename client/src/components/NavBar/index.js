import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import icon from "../../_assets/icon.png"


function NavBar(props) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand >
                    <Row>
                        <Col>
                            <img
                                src={icon}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Company logo"
                            />
                        </Col>
                        <Col>
                            <div>Add New User Profile</div>
                        </Col>
                    </Row>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;
