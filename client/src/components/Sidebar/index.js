import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import icon from "../../_assets/app-icon.png"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {

    const [stepData, setStepData] = useState({
        stepOne: "Grey",
        stepTwo: "Grey",
        stepThree: "Grey"
    })

    useEffect(() => {
        if (props.step === 1) {
            setStepData({
                stepOne: "Green",
                stepTwo: "Grey",
                stepThree: "Grey"
            })
        } else if (props.step === 2) {
            setStepData({
                stepOne: "Grey",
                stepTwo: "Green",
                stepThree: "Grey"
            })
        } else {
            setStepData({
                stepOne: "Grey",
                stepTwo: "Grey",
                stepThree: "Green"
            }
            )
        }
    }, [props.step])

    return (
        <div className="sideBar" style={{ padding: 50, textAlign: "right", overflow: "hidden" }}>

            <Row>
                <Col>
                    <FontAwesomeIcon icon={faCircle} style={{ alignSelf: "right", color: `${stepData.stepOne}` }} />
                </Col>
                <Col>
                    <div >Add Login Details</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faCircle} style={{ alignSelf: "right", color: `${stepData.stepTwo}` }} />
                </Col>
                <Col>
                    Select the User Group
                </Col>
            </Row>
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faCircle} style={{ alignSelf: "right", color: `${stepData.stepThree}` }} />
                </Col>
                <Col>
                    Submit the Form
                </Col>
            </Row>
            <img
                src={icon}
                alt="Company logo"
                style={{ position: "relative", maxWidth: "150%", height: "auto" }}
            />
        </div>
    )
}

export default Sidebar;