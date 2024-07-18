"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import './header.scss';
import Image from 'next/image';

interface HeaderProps {
    linkMenu: {name: string, href: string}[]
}

export default function Header({linkMenu} : HeaderProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => {
        setTimeout(() => {
            setNavbarOpen(false);
        }, 300)
      }

      useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1200 && navbarOpen) {
                setNavbarOpen(false);
            }
        }
 
        handleResize();
 
        window.addEventListener("resize", handleResize);
 
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [navbarOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <header className={`sectHeader sectHeader--fixed${navbarOpen ? ' show-menu' : ''}${scrolled ? ' scrolled' : ''}`}>
            <div className="headerIntern"> 
                <div className="container-transverse container">
                    <div className="headerIntern-left">
                        <div className="cntlogo">
                                <Link href="/#home" title='Ancre to top'>
                                    <figure>
                                        <Image src="/images/logo.svg" alt="Travelian Logo Site" width={234} height={45} title='Travelian logo image'/>
                                    </figure>
                                </Link>
                            </div>
                        <div className="btnBox">
                            <button className={navbarOpen ? "btn btn-icon btn-mobile open" : "btn btn-icon btn-mobile"} onClick={()=>setNavbarOpen(!navbarOpen)} aria-label="open navBar">
                                <span></span>
                                <span></span>
                                <span></span>    
                            </button>
                        </div>  
                    </div>
                    <div className="headerIntern-center">
                        <div className={`headerInternContent${navbarOpen ? ' show-menu' : ''}`}>
                            
                            <div className="boxNavIntern"> 
                                <nav className="menuNav"> 
                                    <div className="cntNavBox"> 
                                        <ul className="cntNav">
                                            {linkMenu.map((link) => {
                                                const isActive = pathname === link.href
                                        
                                                return (
                                                    <li key={link.name}>
                                                        <Link
                                                            className={isActive ? 'cntNav-link active' : 'cntNav-link'}
                                                            href={link.href}
                                                            onClick={closeMenu} locale="en" title='Link menu'>
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul> 
                                    </div> 
                                </nav>  
                            </div>

                            <div className="headerIntern-mobile">
                                <Link className="btn btn-link" href="/login" title='link to login'>Login</Link>
                                <Link className="btn btn-primary" href="/" title='Link to Sign up '>Sign up</Link>
                            </div>
                        </div> 
                    </div>
                    <div className="headerIntern-right">
                        <Link className="btn btn-link" href="/login" title='link to login'>Login</Link>
                        <Link className="btn btn-primary" href="/" title='Link to Sign up '>Sign up</Link>
                    </div>
                </div>
            </div>   
        </header>
    )
  }
  