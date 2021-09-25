import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import StartingForm from "../components/StartingForm";


function Main() {
  const [userData, setUserData] = useState({
    step: "first",
    email: "",
    verify: false
  })

  function onClick(event) {
    event.preventDefault();

    if (document.getElementById("Password").value === document.getElementById("VerifyPassword").value) {
      setUserData({
        email: document.getElementById("Email").value,
        verify: true
      })
      console.log(userData.email)
    } else {
      console.log("passwords do not match")
    }
  }

  return (
    <div>
      <Row>
        <Col xs={4}>
          <Sidebar step={userData.step}/>
        </Col>
        <Col>
          <StartingForm onClick={onClick} />
        </Col>
      </Row>
    </div>
  );
}

export default Main;
