import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import UserGroupDropdown from "../components/UserGroupDropdown";


function UserGroup() {
  const [userData, setUserData] = useState({
    step: "first",
    email: "",
    verify: false
  })

  function onClick(event) {
    event.preventDefault();
    let selectedGroup = document.getElementById("Usergroup").value;
    console.log(selectedGroup)
  }

  return (
    <div>
      <Row>
        <Col xs={4}>
          <Sidebar step={userData.step}/>
        </Col>
        <Col>
          <UserGroupDropdown onClick={onClick}/>
        </Col>
      </Row>
    </div>
  );
}

export default UserGroup;
