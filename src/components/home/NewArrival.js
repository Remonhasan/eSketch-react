import React, { Fragment, Component } from 'react'
import Slider from 'react-slick'
import { Row, Col, Card, Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class NewArrival extends Component {

  constructor (props){
    super(props);

    // Binding the two action methods of slider
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this)
  }

  // Slider will go forward
  next (){
    // this.slider is defiened in jsx slider reference
    this.slider.slickNext();
  }

  // Slider will go backword
  previous (){
    this.slider.slickPrev();
  }


  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Container className="text-center BetweenTwoSection" fluid={true}>
         <h4 className="section-title mt-3">NEW ARRIVAL
         <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
              <i className="fa fa-angle-left"></i>
         </a>
         <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
              <i className="fa fa-angle-right"></i>
         </a>
         </h4>
          <h6 className="section-sub-title pb-3">Some of our exclusive collection, you may like</h6>
       
       <Slider  ref={c=>(this.slider=c)} {...settings}>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img src="https://static-01.daraz.com.bd/p/a70b1bdb1a2a0e8665f3a9cb5cbe74d7.jpg_400x400q75-product.jpg_.webp" />
                <Card.Body>
                  <h1 className="product-name-on-card">Ryzen 5 VivoBook</h1>
                  <h1 className="product-price-on-card ">Price: 3000 TK</h1>
                </Card.Body>
              </Card>
          </div>
        </Slider>
    
      </Container>
    )
  }
}
