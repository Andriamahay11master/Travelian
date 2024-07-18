import Link from 'next/link';
import './scrollTop.scss';
import React from 'react';

export default function ScrollTop() {
    return (
        <div className="scroll-top">
            <Link href="#top" className='btn btn-top'><i className="icon-arrow-down"></i></Link>
        </div>
    );
}