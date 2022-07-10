import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import SliderHome from './SliderHome'
import MegaMenu from './MegaMenu'

export default class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className='p-0 TopSection m-0 overflow-hidden' fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                 <MegaMenu/>
                </Col>
                <Col lg={9} md={9} sm={12}>
                  <SliderHome/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
