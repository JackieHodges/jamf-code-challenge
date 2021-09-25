import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ConfirmDetails from "../components/ConfirmDetails";
import Sidebar from "../components/Sidebar";


function Submit() {

  function onClick(event) {
    event.preventDefault();
    console.log("you've been selected")
  }

  return (
    <div>
      <Row>
        <Col xs={4}>
          <Sidebar />
        </Col>
        <Col>
          <ConfirmDetails onClick={onClick} />
        </Col>
      </Row>
    </div>
  );
}

export default Submit;
