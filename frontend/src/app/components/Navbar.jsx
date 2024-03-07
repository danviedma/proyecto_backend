"use client";
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-center items-center p-5 mb-20 lg:mb-0">
            
            <button className="text-white block lg:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <ul className={`lg:flex lg:justify-evenly absolute lg:relative w-full lg:w-auto text-white lg:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? "top-20" : "-top-full"}`}>
                <li className="m-2 mr-5 lg:m-10">
                    <Link href="/" passHref>
                        <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Home</span>
                    </Link>
                </li>
                <li className="m-2 mr-5 lg:m-10">
                    <Link href="/projects" passHref>
                        <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Proyectos</span>
                    </Link>
                </li>
                <li className="m-2 mr-5 lg:m-10">
                    <Link href="/news" passHref>
                        <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Noticias</span>
                    </Link>
                </li>
                <li className="m-2 mr-5 lg:m-10">
                    <Link href="/contact" passHref>
                        <span className="transition duration-300 hover:text-blue-500 focus:text-blue-500 cursor-pointer">Contacto</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
