import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Container, Navbar, Button } from 'react-bootstrap'

export default class FooterDesktop extends Component {
  render() {
    return (
      <div className="m-0 bg-white mt-5 pt-3 shadow-sm">
        <div className='loaderDiv'>
          <div className="ph-item">
            <div className="ph-col-12">
              <div className="ph-row">
                <div className="ph-col-12" />
                <div className="ph-col-12" />
                <div className="ph-col-12" />
                <div className="ph-col-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="mainDiv">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                <p>Great Company</p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a target="_blank" href=""><i className="fab m-1 h4 fa-facebook" /></a>
                <a target="_blank" href=""><i className="fab m-1 h4 fa-instagram" /></a>
                <a target="_blank" href=""><i className="fab m-1 h4 fa-twitter" /></a>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <a href="" className="footer-link">About Us</a><br />
                <a href="" className="footer-link">Contact Us</a><br />
                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                <p>Stata Address</p>
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <a href="" className="footer-link">How To Purchase</a><br />
                <a href="" className="footer-link">Privacy Policy</a><br />
                <a href="" className="footer-link">Refund Policy</a><br />
              </Col>
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                <a target="_blank" href=""><img className="" src="" alt="ios logo" /></a><br />
                <a target="_blank" href=""><img className="mt-2" src="" alt="android logo" /></a>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
            <Container className="">
              <Row className="px-0 text-white">
                <p>Delivery Notice</p>
              </Row>
            </Container>
          </Container>
        </div>
      </div>
    )
  }
}
