import React from "react";
import { Navbar, Container } from "react-bootstrap";
import icon from "../_assets/icon.png"


function NavBar(props) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand >
                    <img
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Company logo"
                    />
                    <div>Add New User Profile</div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;
