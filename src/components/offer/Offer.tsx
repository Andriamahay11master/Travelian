import React from 'react';
import './offer.scss';
import Link from 'next/link';
import Image from 'next/image';
import { OfferType } from '@/models/OfferType';

export default function Offer({srcImage, altImage, wImage, hImage, title, note, desc, currency, price, txtButton, hrefButton} : OfferType){
    return (
        <div className='offer'>
            <div className="offer-top">
                <Image src={srcImage} width={wImage} height={hImage} alt={altImage} loading="lazy" title={altImage}/>
            </div>
            <div className="offer-bottom">
                <h3 className="offer-title">{title}</h3>
                {note && (
                    <div className='offer-note'>
                        {[...Array(note)].map((_, index) => (
                            <i key={index} className="icon-star"></i>
                        ))}
                    </div>
                )}  
                <p className="offer-desc">{desc}</p>
                <div className="offer-details">
                    <div className="offe-details-col">
                        <p className="offer-price">From <span>{currency}{price}</span></p>
                    </div>
                    <div className="offe-details-col">
                        <Link href={hrefButton} className='btn btn-primary' title='Offer link' target='_blank'>{txtButton}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}