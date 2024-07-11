import React from 'react'
import './testimonial.scss'
import Image from 'next/image'
import { TestimonialType } from '@/models/TestimonialType'
export default function Testimonial({desc, name, job, srcImage, note, altImage, width, height} : TestimonialType) {
    return (
        <div className="testimonial">
            <div className="testimonial-img">
                <Image src={srcImage} width={width} height={height} alt={altImage} loading="lazy" title={altImage}/>
            </div>
            <div className="testimonial-content">
                <p className="testimonial-desc">{desc}</p>
                {note && (
                    <div className='testimonial-note'>
                        {[...Array(note)].map((_, index) => (
                            <i key={index} className="icon-star"></i>
                        ))}
                    </div>
                )}
                <p className="testimonial-name">{name}</p>
                <span className="testimonial-job">{job}</span>
            </div>
        </div>
    )
}