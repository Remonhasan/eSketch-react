import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
export default class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center card' fluid={true}>
          <h4 className="section-title mt-3">SPECIAL COLLECTION</h4>
          <h6 className="section-sub-title pb-3">Some of our exclusive collection, you may like</h6>
          <Row>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card text-enter w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card text-enter w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card text-enter w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card text-enter w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </Fragment>
    )
  }
}
