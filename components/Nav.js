import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav id="main-nav">
            <div id="nav-heading">
                <img src="img/logo_e.png" alt=""/>
                <div>
                    <h1>Toronto Eye Prosthetics</h1>
                    <span>Phil Bowen BCO, BADO</span>
                </div>
            </div>
            <div class="container">
                <div class="nav-content">
                    {/* <!-- <img src="img/logo_e.png" alt=""> --> */}
                    <ul>
                        <li><Link href="/" class="current">Home</Link></li>
                        <li><Link href="/learn">Learn More</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}