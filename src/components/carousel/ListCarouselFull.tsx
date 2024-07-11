"use client"
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageType } from "@/models/ImageType";
import GabaritImage from "../image/GabaritImage";

interface ListCarouselProps {
    list: ImageType[]
}
export default function ListCarouselFull({list} : ListCarouselProps) {
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
                <GabaritImage key={index} {...item}/>
            ))}
        </Carousel>
    )
}