import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Container, Navbar, Button, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ProductDetails extends Component {
  render() {
    return (
        <Fragment>
        <Container fluid={true}  className="TopSection  animated slideInDown">
            <Row>
                <Breadcrumb className="shadow-sm w-100 bg-white">
                    <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                    <Breadcrumb.Item> <Link to="/productDetails">Details</Link></Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row className="p-1">
                <Col  md={12} lg={12} sm={12} xs={12}>
                    <Row className=" shadow-sm  bg-white">
                        <Col className="p-3 animated " md={6} lg={6} sm={12} xs={12}>
                            
                                <Container className="my-3">
                                    <Row>
                                        <Col className="p-0 image-box m-0"  md={3} lg={3} sm={3} xs={3}>
                                            <img  className="w-100 Product-sm-img" src="https://img.choice.com.au/-/media/6cd0aa9099034d97bd66bb4b846c5aee.ashx?w=660&jq=80%20660w" alt=""/>
                                        </Col>
                                        <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img  className="w-100 Product-sm-img" src=""  alt=""/>
                                        </Col>
                                        <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img  className="w-100 Product-sm-img" src=""  alt=""/>
                                        </Col>
                                        <Col className="p-0 image-box m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img  className="w-100 Product-sm-img" src=""  alt=""/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                <h5 className="Product-Name">Title</h5>
                                <h6 className="section-sub-title">Subtitle</h6>
                                Special Price, Price

                                <div className="ColorDiv">
                                    <h6 className="mt-2">Choose Color</h6>
                                    <select  className="form-control form-select">
                                        <option value="">Choose Color</option>
                                        colorOption
                                    </select>
                                </div>

                                <div className="SizeDiv">
                                    <h6 className="mt-2">Choose Size</h6>
                                    <select  className="form-control form-select">
                                        <option value="">Choose Size</option>
                                        SizeOption
                                    </select>
                                </div>
                                <div className="">
                                    <h6 className="mt-2">Choose Quantity</h6>
                                    <select  className="form-control form-select">
                                        <option value="">Choose Quantity</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="input-group mt-3">
                                    <Button  className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"/>Add to Cart</Button>
                                    <Button  className="btn btn-primary m-1"> <i className="fa fa-car"/>Order Now</Button>
                                    <Button className="btn btn-primary m-1"> <i className="fa fa-heart"/>Add to Fav</Button>
                                </div>
                            </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                    <div className="shadow-sm p-3 bg-white">
                        <h6 className="mt-2">DETAILS</h6>
                        details 
                    </div>
                </Col>
                <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                    <div className="shadow-sm p-3 bg-white">
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
    )
  }
}
