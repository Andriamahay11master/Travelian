import React from 'react'
import './testimonial.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TestimonialType } from '@/models/TestimonialType';
import Testimonial from './Testimonial';

interface ListTestimonialProps {
    list: TestimonialType[]
}
export default function ListTestimonial({list} : ListTestimonialProps) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1200, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };

    return(
        <Carousel className="carousel-list-full" responsive={responsive} transitionDuration={500} ssr={true} renderArrowsWhenDisabled={true}>
        {list.map((item, index) => (
            <Testimonial key={index} {...item}/>
        ))}
        </Carousel>
    )
}