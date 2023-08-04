import React from 'react';
import CBBlack from '../assets/CB-black.svg';
import CBWhite from '../assets/CB-white.svg';
import { Link } from "react-scroll";
import dark from '../assets/moon.svg';
import light from '../assets/sun.svg';

//
// NavBar Component: This is a React component representing the navigation bar of the website. It is fixed to the top of the page and includes various elements based on the props provided.
// Props: 
// - darkMode: A boolean prop used to determine whether the website is in dark mode or light mode.
// - toggleDarkMode: A function prop to handle the toggling of dark mode.
// - isMobile: A boolean prop that determines whether the component is being rendered on a mobile device or not.
// - mobileMenuToggle: A function prop used to toggle the mobile menu when on mobile devices.

// The navigation bar includes the following elements:
// 1. Logo: A logo (CB icon) displayed in the top left corner. The logo changes color based on the darkMode prop.
// 2. Navigation Links: Links to different sections of the page (HOME, ABOUT, PROJECTS). The links scroll smoothly to the corresponding sections. On mobile devices, the navigation links are hidden by default and revealed when the hamburger menu is clicked.
// 3. Dark Mode Toggle: A toggle button represented by a sun/moon icon that switches between light and dark mode. The toggle button is positioned at the top right corner of the navigation bar. The button and background change color based on the darkMode prop.
// 4. Hamburger Menu: A button that activates the mobile menu when clicked on mobile devices. It displays three horizontal bars when the mobile menu is closed and two bars when the mobile menu is open.

// The component uses TailwindCSS utility classes to style the layout and appearance of the elements.

// Note: The component receives props to handle dark mode, mobile menu behavior, and other visual aspects of the navigation bar.

const NavBar = ({darkMode, toggleDarkMode, isMobile, mobileMenuToggle}) => {
    return (
        <nav className="navbar fixed top-0 left-0 right-0 text-2xl flex items-center justify-between p-2 bg-dark-lime text-black dark:text-light-gray dark:bg-charcoal z-10">
            <div className="flex items-center">
                {darkMode ? (
                    <img src={CBWhite} alt="CB" className=" h-11 w-11" />
                ) : (
                    <img src={CBBlack} alt="CB" className="h-11 w-11" />
                )}
            </div>

            {/* Navigation Links */}
            <ul className={`lg:flex space-x-4 ${isMobile ? 'flex flex-col absolute top-16 left-0 right-0 bg-dark-lime dark:bg-charcoal' : 'hidden'} lg:static lg:flex`}>                
                <li>
                    <Link to='welcome' smooth={true} duration={500} className="font-sans hover:text-lime dark:hover:text-light-lime cursor-pointer hover:border-b border-black dark:hover:border-b dark:hover:border-lime">
                    HOME
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} className="font-sans hover:text-lime dark:hover:text-light-lime cursor-pointer hover:border-b border-black dark:hover:border-b dark:hover:border-lime">
                    ABOUT
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} className="font-sans hover:text-lime dark:hover:text-light-lime cursor-pointer hover:border-b border-black dark:hover:border-b dark:hover:border-lime">
                    PROJECTS
                    </Link>
                </li>
            </ul>

            {/* Dark Mode Toggle */}
            <div>
                <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer font-sans">
                    {darkMode ? (
                        <img src={light} alt="light" className="white-filter m-2 h-5 w-5" />
                    ) : (
                        <img src={dark} alt="dark" className="m-2 h-5 w-5" />
                    )}
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        className="hidden"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                    />
                    <span
                    className={`${
                        darkMode ? 'bg-lime' : 'dark: bg-charcoal'
                    } flex items-center w-10 h-6 rounded-full bg-lime dark:bg-light-gray transition-colors duration-300 ease-in-out`}
                    >
                    <span
                        className={`${
                        darkMode ? 'translate-x-6' : 'translate-x-0'
                        } inline-block w-4 h-4 rounded-full bg-black shadow transform transition-transform duration-300 ease-in-out`}
                    ></span>
                    </span>
                </label>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden"> 
                <button onClick={mobileMenuToggle} className='p-4'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                    {isMobile ? (
                        <path
                            fillRule="evenodd"
                            d="M3.25 8a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75zM3.25 12.75a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75z" // draws three horizontal bars when menus closed
                        ></path>
                        
                    ) : (
                        <path
                            fillRule="evenodd"
                            d="M2.25 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zM2.25 5.75a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75zM2.25 14.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75z" // draws two horizontal bars when menus open
                        ></path>
                    )}
                    </svg>
                </button>

            </div>

            {/* Mobile Menu */}
            {isMobile && (
                <div className="lg:hidden absolute top-16 left-0 right-0 bg-light-gray dark:bg-charcoal">
                    <ul className="flex flex-col space-y-4 p-4">
                        <li>
                            <Link to='welcome' smooth={true} duration={500} className="font-sans hover:text-lime dark:hover:text-light-lime cursor-pointer hover:border-b border-black dark:hover:border-b dark:hover:border-lime">
                            HOME
                            </Link>
                        </li>
                        <li>
                            <Link to='about' smooth={true} duration={500} className="font-sans hover:text-lime dark:hover:text-light-lime cursor-pointer hover:border-b border-black dark:hover:border-b dark:hover:border-lime">
                            ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link to='projects' smooth={true} duration={500} className="font-sans hover:text-lime dark:hover:light-lime cursor-pointer hover:border-b border-black dark:hover:border-b dark:hover:border-lime">
                            PROJECTS
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
