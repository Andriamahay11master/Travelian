import React from "react";
import './gabaritImage.scss';
import Image from "next/image";

interface GabaritImageProps {
    title: string;
    desc: string;
    srcImage: string;
    width: number;
    height: number;
    altImage: string;
}
export default function GabaritImage({title, desc, srcImage, width, height, altImage} : GabaritImageProps) {
    return(
        <div className="gabaritImage">
            <Image className="gabaritImage-img" src={srcImage} width={width} height={height} alt={altImage} loading="lazy" title={altImage}/>
            {title && <h3 className="gabaritImage-title">{title}</h3>}
            {desc && <p className="gabaritImage-desc">{desc}</p>}
        </div>
    )
}