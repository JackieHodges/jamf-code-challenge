import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import UserGroupDropdown from "../components/UserGroupDropdown";


function UserGroup() {
  const [userGroups, setUserGroups] = useState([])

  useEffect(() => {
    fetch("./_data/mock.json")
      .then(res => res.json())
      .then(data => setUserGroups(data))
      .catch(err => console.log(err));
  }, [])

  function onClick(event) {
    event.preventDefault();
    let selectedGroup = document.getElementById("Usergroup").value;
    console.log(selectedGroup)
  }

  return (
    <div>
      <Row>
        <Col xs={4}>
          <Sidebar />
        </Col>
        <Col>
          <UserGroupDropdown userGroups={userGroups} onClick={onClick} />
        </Col>
      </Row>
    </div>
  );
}

export default UserGroup;
