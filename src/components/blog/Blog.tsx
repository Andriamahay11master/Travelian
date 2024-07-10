import './blog.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogProps {
    srcImage: string;
    wImage: number;
    hImage: number;
    altImage: string;
    title: string;
    desc: string;
    txtButton: string;
    href: string;
}

export default function Blog({srcImage, wImage, hImage, altImage, title, desc, txtButton, href} : BlogProps) {
    return (
        <div className="blogItem">
            <div className="blogItem-img">
                <Image src={srcImage} width={wImage} height={hImage} alt={altImage} loading="lazy" title={altImage}/>
            </div>
            <div className="blogItem-content">
                <div className="blogItem-body">
                    <h3 className="blogItem-title title-h3">{title}</h3>
                    <p className='blogItem-desc'>{desc}</p>
                    <Link href={href} className='btn btn-arrow' title='Blog link' target='_blank'><span>{txtButton}</span> <i className='icon-long-arrow'></i></Link>
                </div>
            </div>
        </div>
    );
}