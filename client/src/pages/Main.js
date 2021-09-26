import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import StartingForm from "../components/StartingForm";
import UserGroupDropdown from "../components/UserGroupDropdown";


function Main() {

  const [userData, setUserData] = useState({
    step: 1,
    email: "",
    usergroup: "",
    verify: false
  })

  const [userGroups, setUserGroups] = useState([])

  useEffect(() => {
    if (userData.step === 2) {
      fetch("./_data/mock.json")
        .then(res => res.json())
        .then(data => setUserGroups(data))
        .catch(err => console.log(err));
    }
  }, [userData])

  function onClick(event) {
    event.preventDefault();
    if (userData.step === 1) {
      if (document.getElementById("Password").value === document.getElementById("VerifyPassword").value) {
        setUserData({
          email: document.getElementById("Email").value,
          verify: true,
          step: 2
        })
      } else {
        alert("passwords do not match")
      }
    } else if (userData.step === 2){
      let selectedGroup = document.getElementById("Usergroup").value;
      setUserData({
        usergroup: selectedGroup
      })
    }
  }

  function DifferingSteps(){
    if (userData.step === 1){
      return <StartingForm onClick={onClick} />
    } if (userData.step === 2){
      return <UserGroupDropdown userGroups={userGroups} onClick={onClick} />

    }
  }

  return (
    <div>
      <Row>
        <Col xs={4}>
          <Sidebar step={userData.step} />
        </Col>
        <Col>
        <DifferingSteps />
          {/* <StartingForm onClick={onClick} />
          <UserGroupDropdown userGroups={userGroups} onClick={onClick} /> */}
        </Col>
      </Row>
    </div>
  );
}

export default Main;
