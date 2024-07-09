import React from "react";
import './gabaritImage.scss';
import Image from "next/image";
import { ImageType } from "@/models/ImageType";
import Link from "next/link";

export default function GabaritImage({href ,title, desc, srcImage, width, height, altImage} : ImageType) {
    return(
        <Link href={href} className="gabaritImage" target="_blank">
            <Image className="gabaritImage-img" src={srcImage} width={width} height={height} alt={altImage} loading="lazy" title={altImage}/>
            {title && <h3 className="title-h3 gabaritImage-title">{title}</h3>}
            {desc && <div className="gabaritImage-desc-block"><p className="gabaritImage-desc"><i className="icon-map"></i>{desc}</p></div>}
        </Link>
    )
}