"use client"
import Link from 'next/link';
import './scrollTop.scss';
import React, { useEffect, useState } from 'react';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour gérer le défilement
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
    };

    // Ajoute un écouteur d'événement de défilement
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction pour remonter en haut de la page
    const scrollToTop = (e : any) => {
        e.preventDefault();
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    if (!isVisible) { return null; }
    return (
        <div className={isVisible ? 'scroll-top active' : 'scroll-top'}>
            <Link href="#" className='btn btn-top' onClick={scrollToTop}><i className="icon-arrow-down"></i></Link>
        </div>
    );
}