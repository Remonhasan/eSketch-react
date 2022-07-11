import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class SuggestedProducts extends Component {
  render() {
    return (
        <Fragment>
        <Container fluid={true} className="text-center BetweenTwoSection mt-3 mb-3">
            <h4 className="section-title">YOU MAY LIKE</h4>
            <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like</h6>
            <Row>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
              <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            </Row>
        </Container>
    </Fragment>
    )
  }
}
