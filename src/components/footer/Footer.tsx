import * as React from 'react';
import './footer.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    
    return (
        <footer className='footerPage'>
                <div className="container">
                <div className="footer-top">
                    <div className="footer-col">
                        <Link href="/" title='Ancre to top' className='logo-link-footer'>
                            <figure>
                                <Image src="/images/logo.svg" alt="Travelian Logo Site" width={234} height={45} title='Travelian logo image'/>
                            </figure>
                        </Link>
                        <p>2024 © Developed by <Link href="https://andriamahay-irimanana.vercel.app/" target='_blank' className='copyRightLink'>Mahay </Link></p>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Menu</h3>
                        <ul className='list-footer'>
                            <li className="list-item">
                                <Link href="/" className="list-link">Home</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/explore" className="list-link">Explore</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/travel" className="list-link">Travel</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/blog" className="list-link">Blog</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/pricing" className="list-link">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Information</h3>
                        <ul className='list-footer'>
                            <li className="list-item">
                                <Link href="/contact" className="list-link">Destinations</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/contact" className="list-link">Supports</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/contact" className="list-link">Term & Conditions</Link>
                            </li>
                            <li className="list-item">
                                <Link href="/contact" className="list-link">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Contact Info</h3>
                        <ul className='list-footer'>
                            <li className="list-item">
                                <Link href="tel:+123 456 789" className="list-link">+123 456 789</Link>
                            </li>
                            <li className="list-item">
                                <Link href="mailto:info@travellian.com" className="list-link">info@travellian.com</Link>
                            </li>
                            <li className="list-item">1245, New Yourk, USA</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="title-h3">Follow us on</h3>
                        <ul className="list-ns">
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank'><i className='icon icon-facebook'></i></Link>
                            </li>
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank'><i className='icon icon-pinterest'></i></Link>
                            </li>
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank'><i className='icon icon-instagram'></i></Link>
                            </li>
                            <li className="list-item">
                                <Link href="#" className='list-link' target='_blank'><i className='icon icon-twitter'></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer> 
    )
  }
  