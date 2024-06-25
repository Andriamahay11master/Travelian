import * as React from 'react';
import './footer.scss';
import Link from 'next/link';

export default function Footer() {
    
    return (
        <footer className='footerPage'>
            <div className="footerCopyright">
                <div className="cntCopyright">
                    <div className="itemCol"> 
                        <p>2024 © Developed by <Link href="https://andriamahay-irimanana.vercel.app/" target='_blank' className='copyRightLink'>IRIMANANA Henikaja Andriamahay </Link></p>
                    </div>
                </div>
            </div>
        </footer> 
    )
  }
  