"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TripType } from '@/models/TripType';
import GabaritTrip from '../trip/GabaritTrip';

interface ListTripProps {
    list: TripType[]
}

export default function ListTrip({list} : ListTripProps) {
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
    return (
        <Carousel className="carousel-list-full carousel-trip" responsive={responsive} transitionDuration={500} ssr={true} renderArrowsWhenDisabled={true} arrows={false} swipeable={true} rewind={true}>
            {list.map((item, index) => (
                <GabaritTrip key={index} {...item}/>
            ))}
        </Carousel>
    )
}