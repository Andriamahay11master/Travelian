import Link from 'next/link';
import React from 'react';

export default function ScrollTop() {
    return (
        <div className="scroll-top">
            <Link href="#top" className='btn btn-primary'><i className="icon-arrow-down"></i></Link>
        </div>
    );
}