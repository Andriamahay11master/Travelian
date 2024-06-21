"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import './header.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeaderProps {
    linkMenu: {name: string, href: string}[]
}

export default function Header({linkMenu} : HeaderProps) {
    const [navbarOpen, setNavbarOpen] = useState(false);
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


    return (
        <header className={`sectHeader sectHeader--fixed${navbarOpen ? ' show-menu' : ''}`}>
            <div className="headerIntern"> 
                <div className="container-transverse">
                    <div className="headerIntern-left">
                        <div className="cntLogoMobile">
                                <Link href="/#home" title='Ancre to top'>
                                    <figure>
                                        <Image src="/images/mindmoney.jpg" alt="Logo Site" width={200} height={200} title='mindmoney logo image'/>
                                    </figure>
                                    <span className='cntLogo-text'>MoneyMind</span>
                                </Link>
                        </div>
                        <div className={`headerInternContent${navbarOpen ? ' show-menu' : ''}`}>
                            <div className="cntlogo">
                                <Link href="/" title='Ancre to top'>
                                    <figure>
                                        <Image src="/images/mindmoney.jpg" alt="Logo Site" width={200} height={200} title='mindmoney logo image'/>
                                    </figure>
                                </Link>
                            </div>
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

                        </div> 
                        <div className="btnBox">
                            <button className="btn btn-icon btn-mobile" onClick={()=>setNavbarOpen(!navbarOpen)} aria-label="open navBar">
                                <i className={navbarOpen ? "icon-close" : "icon-burger"}></i>
                            </button>
                        </div>  
                    </div>
                </div>
            </div>   
        </header>
    )
  }
  