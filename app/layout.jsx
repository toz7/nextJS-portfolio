'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import "./global.css"



export default function RootLayout({ children }) {
    
    const [className, setClassName] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setClassName('scrolled');
            } else {
                setClassName('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
      <html lang="en">
        <body>
            <header>
                <nav className={className}>
                <h3 className="header">Tevfik Ozcelik's Portfolio</h3>
                    <ul>
                        <li><Link style={{ textDecoration: 'none', color: '#FF6B6B' }} href="/">Home</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: '#FF6B6B'}} href="/about">About</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: '#FF6B6B'}} href="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
            </header>
            <h1 className='skills'>My Skills</h1>
            {children}
            <footer className='footer'>
                <p>&copy; {new Date().getFullYear()}</p>
            </footer>
        </body>
      </html>
    )
  }