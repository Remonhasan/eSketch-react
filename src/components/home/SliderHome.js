import React, { Fragment, Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      autoplay:true,
      autoplaySpeed:3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };
    return (
    <div>
     <Slider {...settings}>
          <div>
          <img  className="w-100" src="https://icms-image.slatic.net/images/ims-web/43b08b5d-cc0c-4d58-8f06-0f04c89abb07.jpg_1200x1200.jpg" />
          </div>
          <div>
          <img  className="w-100" src="https://icms-image.slatic.net/images/ims-web/9749d684-2969-4f3d-8c5a-4cc3b1103997.jpg" />
          </div>
          <div>
          <img  className="w-100" src="https://icms-image.slatic.net/images/ims-web/efdde9f7-576a-400d-ad50-a76227697c11.jpg" />
          </div>
          <div>
          <img  className="w-100" src="https://icms-image.slatic.net/images/ims-web/ce1549a6-ca2f-42c0-a77a-c4c8e4ac9b9d.jpg" />
          </div>
          <div>
          <img  className="w-100" src="https://icms-image.slatic.net/images/ims-web/d1d1be4b-a576-43af-a06d-2296df78ba77.jpg" />
          </div>
        </Slider>
    </div>
    )
  }
}
