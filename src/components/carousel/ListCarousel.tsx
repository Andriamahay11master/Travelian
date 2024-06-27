"use client"
import * as React from 'react';
import './listCarousel.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerType } from '@/models/BannerType';
import Banner from '../banner/Banner';

interface ListProjectProps {
    list: BannerType[]
}

export default function ListCarousel({list} : ListProjectProps) {
    return (
        <Carousel className="carousel-list" axis='vertical'
        showStatus={false} showThumbs={false} infiniteLoop={true} verticalSwipe='natural' 
        autoPlay={true} stopOnHover={true} interval={5000} dynamicHeight={false} width={'100vw'} showArrows={false} transitionTime={1500}>
            {list.map((item, index) => (
                <Banner key={index} {...item}/>
            ))}
        </Carousel>
    )
  }