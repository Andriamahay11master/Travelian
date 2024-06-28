import React from "react";
import './title.scss';

interface TitleProps{
    title: string,
    content: string
}
export default function Title({title, content} : TitleProps){
    return (
        <div className="blocTitle">
            <h2 className="title-h2">{title}</h2>
            <p>{content}</p>
        </div>
    )
}