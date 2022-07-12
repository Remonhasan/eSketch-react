import React, { Component, Fragment } from 'react'
import { Breadcrumb, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import validation from '../../validation/validation';
import axios from 'axios';
import ApiURL from '../../api/ApiURL';
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends Component {

    // For State Management
    constructor() {
        super();
        // Initial State Value will be Null
        this.state = {
            name: "",
            mobile: "",
            message: ""
        }
    }

    // Get the value of name
    nameOnChange = (event) => {
        let name = event.target.value;
        this.setState({ name: name });
    }

    // Get the value of mobile
    mobileOnChange = (event) => {
        let mobile = event.target.value;
        this.setState({ mobile: mobile });
    }

    // Get the value of message
    messageOnChange = (event) => {
        let message = event.target.value;
        this.setState({ message: message });
    }

    // Submit the form
    onFormSubmit = (event) => {
        // Taking Data from state
        let name = this.state.name;
        let mobile = this.state.mobile;
        let message = this.state.message;
        // Get Button ID
        let sendBtn = document.getElementById('sendBtn');
        // Get Form ID
        let contactForm = document.getElementById('contactForm');

        // Validation
        if (name.length == 0) {
            toast.error("Name field is required");
        } else if (mobile.length == 0) {
            toast.error("Mobile field is required");
        } else if (!(validation.NameRegx).test(name)) {
            toast.error("Invalid Name");
        } else if (!(validation.MobileRegx).test(mobile)) {
            toast.error("Invalid Mobile Number");
        } else if (message.length == 0) {
            toast.error("Message field is required");
        } else {

            sendBtn.innerHTML = "Sending...";
            // Get data by object for submit
            let MyFormData = new FormData();
            MyFormData.append("name", name)
            MyFormData.append("mobile", mobile)
            MyFormData.append("message", message)

            // post by api
            axios.post(ApiURL.SendContactDetails, MyFormData).then(function (response) {
                if (response.status === 200 && response.data === 1) {
                    toast.success("Request Success")
                    sendBtn.innerHTML = "Send";
                    // Reset the form after submit
                    contactForm.reset();
                } else {
                    toast.error("Request fail! Try again")
                    sendBtn.innerHTML = "Send";
                }
            }).catch(function (error) {
                toast.error(error)
                sendBtn.innerHTML = "Send";
            })
        }
        // Stop the page reload after form submit
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>

                <Container>
                    <Row>
                        <Breadcrumb className="shadow-sm TopSection w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link> </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to="/contact">Contact</Link> </Breadcrumb.Item>
                        </Breadcrumb>
                        <Col className="shadow-sm mt-1 animated slideInDown bg-white " md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form onSubmit={this.onFormSubmit} id="contactForm" className="onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Your Name" />
                                        <input onChange={this.mobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number" />
                                        <input onChange={this.messageOnChange} className="form-control m-2" type="text" placeholder="Message" />
                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">Send</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9009669046704!2d90.38828391450218!3d23.750910694674705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcd681372b%3A0x5c2b8755e4327004!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1601135282389!5m2!1sen!2sbd" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
            </Fragment>
        )
    }
}
