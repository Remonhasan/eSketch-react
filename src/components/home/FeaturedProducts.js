import React, { Fragment, Component } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

export default class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <h5  className="section-title">FEATURED PRODUCTS</h5>
          <p className="section-sub-title pb-3">Some of our exclusive collection, you may like</p>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card w-100">
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
