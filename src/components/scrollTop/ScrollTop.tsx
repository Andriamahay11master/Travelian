"use client"
import Link from 'next/link';
import './scrollTop.scss';
import React, { useEffect, useState } from 'react';
import CurrentHashContext, { CurrentHashContextProps } from '@/app/CurrentHashContext';

export default function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { currentHash, setCurrentHash } = React.useContext(CurrentHashContext) || {} as CurrentHashContextProps;

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

    const defaultStateActive = (link: string) => {
        setCurrentHash(link);
    }

    React.useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [currentHash]);

    return (
        <div className={isVisible ? 'scroll-top active' : 'scroll-top'}>
            <Link href="/#home" className='btn btn-top' onClick={() => defaultStateActive("/#home")}><i className="icon-arrow-down"></i></Link>
        </div>
    );
}