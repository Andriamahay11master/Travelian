"use client"
import './gallery.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ImageType } from "@/models/ImageType";
import GabaritImage from "../image/GabaritImage";

interface GalleryProps {
    list: ImageType[]
}
export default function Gallery({list} : GalleryProps) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1200, min: 768 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };

    return (
        <Carousel className="carousel-list-full gallery" responsive={responsive} transitionDuration={500} ssr={true} renderArrowsWhenDisabled={true}>
            {list.map((item, index) => (
                <GabaritImage key={index} {...item}/>
            ))}
        </Carousel>
    )
}