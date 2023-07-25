import React from 'react';
import pwdroomtrim from '../assets/images/pwdroomtrim.png';
import '../styles/banner.css';

export default function Header() {
    return (
        <div className='bg-white sticky'>
            <header className='flex justify-between items-center px-4 max-w-6xl mx-auto'>
                <div>
                    <img
                        className='logo h-32 cursor-pointer pr-4'
                        src={pwdroomtrim}
                        alt='PWDRoom Logo'
                    />
                </div>
                <div className='font-hindsiliguri text-xl'>
                    <ul className='header-items flex space-x-10'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Discover</li>
                        <li className='cursor-pointer'>Add-a-Stall</li>
                        <li className='cursor-pointer'>Sign-In</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
