
import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
          <Container fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
            <Row>
              <Col className='p-1' lg={4} md={4} sm={12} xs={12}>
              <a href="" className='btn'><img className='nav-logo' src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"/></a>
              <Button className="cart-btn"><i className='fa fa-shopping-cart'></i>4 items</Button>
              </Col>
              <Col className='p-1' lg={4} md={4} sm={12} xs={12}>
              <div className="input-group w-100">
                  <input  name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                  <Button type="button" className="btn site-btn"><i className="fa fa-search"/></Button>
              </div>
              </Col>
              <Col className='p-1' lg={4} md={4} sm={12} xs={12}>
              <a className='btn'><i className='fa h4 fa-heart'></i><sup><span className='badge bg-danger'>4</span></sup></a>
              <a className='btn'><i className='fa h4 fa-bell'></i><sup><span className='badge bg-danger'>4</span></sup></a>
              <a className='btn'><i className='fa h4 fa-mobile-alt'></i><sup><span className='badge bg-danger'></span></sup></a>
              <Link to="/onboard" className='h4 btn'>LOGIN</Link>
              </Col>
            </Row>
          </Container>
      </Fragment>
    )
  }
}
