import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '140px' }}>
                {/* <Image src="/path/to/logo.png" alt="GOTME Logo" width={100} height={100} /> */}
                <h1><Link href="#header" className="logo">GOTME</Link></h1>
            </div>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
                    <li><Link href="#header" className="link">Home</Link></li>
                    <li><Link href="#search" className="link">Search</Link></li>
                    <li><Link href="#testimonials" className="link">Testimonials</Link></li>
                    <li><Link href="#footer" className="link">Footer</Link></li>
                </ul>
            </nav>
            <button style={{ marginLeft: '170px' }}>Get Started</button>
        </header>
    );
};

export default Header;