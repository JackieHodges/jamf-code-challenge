import React from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import StartingForm from "../components/StartingForm";


function Main() {

  function onClick (event) {
    event.preventDefault();
    console.log("I've been clicked!")
  }

  return (
    <div>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <StartingForm onClick={onClick}/>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
