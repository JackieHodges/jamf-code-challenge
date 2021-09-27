import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import icon from "../../_assets/app-icon.png"
import "./index.css"

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
        <div className="sideBar" style={{ padding: 50 }}>

            <Row>
                <Col>
                    <div id="first" style={{ textAlign: "right", color: `${stepData.stepOne}` }}>0</div>
                </Col>
                <Col>
                    <div>Add Login Details</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="second" style={{ textAlign: "right", color: `${stepData.stepTwo}` }}>0</div>
                </Col>
                <Col>
                    Select the User Group
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="third" style={{ textAlign: "right", color: `${stepData.stepThree}` }}>0</div>
                </Col>
                <Col>
                    Submit the Form
                </Col>
            </Row>
            <img
                src={icon}
                width="300"
                height="300"
                className="align-bottom"
                alt="Company logo"
            // style={{ position: "relative", left: "400px", top: "300px", overflow: "hidden" }}
            />


        </div>
    )
}

export default Sidebar;