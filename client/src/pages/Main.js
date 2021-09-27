import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import ConfirmDetails from "../components/ConfirmDetails";
import Sidebar from "../components/Sidebar";
import StartingForm from "../components/StartingForm";
import UserGroupDropdown from "../components/UserGroupDropdown";


function Main() {

  const [userData, setUserData] = useState({
    step: 1,
    nextButton: "Next",
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

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function onClick(event) {
    event.preventDefault();
    if (userData.step === 1) {
      let enteredPassword = document.getElementById("Password").value;
      let verifiedPassword = document.getElementById("VerifyPassword").value;
      let enteredEmail = document.getElementById("Email").value;

      if (enteredEmail !== "" && enteredPassword !== "" && verifiedPassword !== "") {
        if (enteredPassword === verifiedPassword) {
          if (validateEmail(enteredEmail)) {
            setUserData({
              ...userData,
              email: enteredEmail,
              verify: true,
              step: 2
            })
          } else {
            alert("email is not valid")
          }
        } else {
          alert("passwords do not match")
        }
      } else {
        alert("Please ensure all fields are completed")
      }
    } else if (userData.step === 2) {
      let selectedGroup = document.getElementById("Usergroup").value;
      setUserData({
        ...userData,
        usergroup: selectedGroup,
        nextButton: "Submit",
        step: 3
      })
    } else {
      alert("Form has been completed!")
    }
  }

  function onCancel(event) {
    event.preventDefault();
    setUserData({
      step: 1,
      nextButton: "Next"
    })
  }

  function DifferingSteps() {
    if (userData.step === 2) {
      return <UserGroupDropdown userGroups={userGroups} onClick={onClick} />
    } else if (userData.step === 3) {
      return <ConfirmDetails userData={userData} onClick={onClick} />
    } else {
      return <StartingForm onClick={onClick} />
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
          <div className="buttonGroup">
            <Button className="cancel" variant="secondary" onClick={onCancel}>Cancel</Button>
            <Button className="submit" onClick={onClick}>{userData.nextButton}</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
