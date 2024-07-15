import React from "react";
import './gabaritTrip.scss';
import Image from "next/image";
import { TripType } from "@/models/TripType";
import Link from "next/link";

export default function GabaritTrip({href,title,desc,srcImage,width,height,altImage,category,note,price,currency,time,} : TripType){ 
    return(
        <Link href={href} className="gabaritTrip" target="_blank" rel="noopener noreferrer" title="Link to image">
            <Image className="gabaritTrip-img" src={srcImage} width={width} height={height} alt={altImage} loading="lazy" title={altImage}/>
            <div className="gabaritTrip-info">
                <div className="gabaritTrip-top">
                    <p className="gabaritTrip-category">{category}</p>
                    <p className="gabaritTrip-price">{currency}{price}/<span className="gabaritTrip-time">{time}</span></p>
                </div>
                <div className="gabaritTrip-bottom">
                    <h3 className="title-h3 gabaritTrip-title">{title}</h3>
                    <div className="gabaritTrip-flex">
                        <div className="gabaritTrip-note">
                            {[...Array(note)].map((_, index) => (
                                <i key={index} className="icon-star"></i>
                            ))}
                        </div>
                        <p className="gabaritTrip-desc"><i className="icon-map"></i>{desc}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}   
