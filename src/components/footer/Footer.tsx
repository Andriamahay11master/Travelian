"use client"
import * as React from 'react';
import './footer.scss';
import Link from 'next/link';
import Image from 'next/image';
import CurrentHashContext, { CurrentHashContextProps } from '@/app/CurrentHashContext';

export default function Footer() {
    const { currentHash, setCurrentHash } = React.useContext(CurrentHashContext) || {} as CurrentHashContextProps;

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
        <footer className='footerPage'>
                <div className="container">
                <div className="footer-top">
                    <div className="footer-col">
                        <Link href="/#home" title='Ancre to top' className='logo-link-footer' onClick={() => defaultStateActive("/#home")}>
                            <figure>
                                <Image src="/images/logo.svg" alt="Travelian Logo Site" width={234} height={45} title='Travelian logo image'/>
                            </figure>
                        </Link>
                        <p>2024 © Developed by <Link href="https://andriamahay-irimanana.vercel.app/" target='_blank' className='copyRightLink' title='Link to my website'>Mahay </Link></p>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Menu</h3>
                        <ul className='list-footer'>
                            <li className="list-item">
                                <Link href="/#home" className="list-link" title='link to home'>Home</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/explore" className="list-link" title='link to explore'>Explore</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/travel" className="list-link" title='link to travel'>Travel</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/blog" className="list-link" title='link to blog'>Blog</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/pricing" className="list-link" title='link to pricing'>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Information</h3>
                        <ul className='list-footer'>
                            <li className="list-item">
                                <Link href="/contact" className="list-link" title='link to destinations'>Destinations</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/contact" className="list-link" title='link to supports'>Supports</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/contact" className="list-link" title='link to term'>Term & Conditions</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/contact" className="list-link" title='link to privacy'>Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Contact Info</h3>
                        <ul className='list-footer'>
                            <li className="list-item">
                                <Link href="tel:+123 456 789" className="list-link" title='link to call'>+123 456 789</Link>
                            </li>
                            <li className="list-item">
                                <Link href="mailto:info@travellian.com" className="list-link" title='link to email'>info@travellian.com</Link>
                            </li>
                            <li className="list-item">1245, New York, USA</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Follow us on</h3>
                        <ul className="list-ns">
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank' title='link to facebook'><i className='icon icon-facebook'></i></Link>
                            </li>
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank' title='link to pinterest'><i className='icon icon-pinterest'></i></Link>
                            </li>
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank' title='link to instagram'><i className='icon icon-instagram'></i></Link>
                            </li>
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank' title='link to twitter'><i className='icon icon-twitter'></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer> 
    )
  }
  