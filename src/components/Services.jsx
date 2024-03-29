import React from 'react'
import{Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/3.jpg'
const Services = () => {
  return (
    <div className='services'>
<Carousel
infiniteLoop
autoPlay
showStatus={false}
showArrows={false}
showThumbs={false}
// showIndicators={false}
interval={1000}
>
      <div>
        <img src={img1} alt="item1" />
        <p className='legend'>Full Stack</p>
    </div>
    <div>
        <img src={img2} alt="item1" />
        <p className='legend' >Web Development</p>
    </div>
</Carousel>
    </div>
  )
}

export default Services