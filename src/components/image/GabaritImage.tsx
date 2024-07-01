import React from "react";
import './gabaritImage.scss';
import Image from "next/image";
import { ImageType } from "@/models/ImageType";

export default function GabaritImage({href ,title, desc, srcImage, width, height, altImage} : ImageType) {
    return(
        <a href={href} className="gabaritImage">
            <Image className="gabaritImage-img" src={srcImage} width={width} height={height} alt={altImage} loading="lazy" title={altImage}/>
            {title && <h3 className="title-h3 gabaritImage-title">{title}</h3>}
            {desc && <div className="gabaritImage-desc-block"><i className="icon-map"></i><p className="gabaritImage-desc">{desc}</p></div>}
        </a>
    )
}