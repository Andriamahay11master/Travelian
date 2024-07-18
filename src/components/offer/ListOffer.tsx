"use client"
import React from 'react';
import Offer from './Offer';
import { OfferType } from '@/models/OfferType';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ListOfferProps {
    list: OfferType[]
}
export default function ListOffer({list} : ListOfferProps) {
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
        <Carousel className="carousel-list-full carousel-offer" responsive={responsive} transitionDuration={500} ssr={true} renderArrowsWhenDisabled={true}>
            {list.map((item, index) => (
                <Offer key={index} {...item}/>
            ))}
        </Carousel>
    )
}