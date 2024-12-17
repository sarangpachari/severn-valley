import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../assets/slider-1.webp'
import slider2 from '../assets/slider-2.webp'
import slider3 from '../assets/slider-3.webp'
import slider4 from '../assets/slider-4.webp'

const HomeSlider = () => {
  return (
    <div>
       <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={false} showIndicators={false} showStatus={false} showThumbs={false} showArrows={false}>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={slider4} />
                    <p className="legend">Legend 4</p>
                </div>
                
            </Carousel>
    </div>
  )
}

export default HomeSlider