import React from "react";
import './listCarouselFull.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ImageType } from "@/models/ImageType";
import GabaritImage from "../image/GabaritImage";

interface ListCarouselProps {
    list: ImageType[]
}
export default function ListCarouselFull({list} : ListCarouselProps) {
    return(
        <Carousel className="carousel-list-full"
        showStatus={false} showThumbs={false} infiniteLoop={true} 
        autoPlay={false} stopOnHover={true} interval={5000} dynamicHeight={false} showArrows={false} transitionTime={1500}>
            {list.map((item, index) => (
                <GabaritImage key={index} {...item}/>
            ))}
        </Carousel>
    )
}