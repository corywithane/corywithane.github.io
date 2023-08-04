import React from "react";
import GitHubWhite from '../assets/github-white.png';
import GitHubBlack from '../assets/github-black.svg';
import LinkedInWhite from '../assets/linkedin.png';
import LinkedInBlack from '../assets/linkedin-black.svg';
import Pride from '../assets/pride.png';

//
// Footer Component: This is a React component representing the footer section of the website. It sticks to the bottom of the page using the "fixed" class.
// Props: 
// - darkMode: A boolean prop used to determine whether the footer should be displayed in dark mode or light mode.

// The footer includes the following elements:
// 1. GitHub and LinkedIn clickable icons: These icons serve as links to the owner's GitHub and LinkedIn pages. The icon colors change based on the darkMode prop (white icons in dark mode and black icons in light mode).
// 2. Center div for copyright and name info: This div contains text displaying the year and owner's initials (GCB) and mentions that the website was built by the owner using React.js and TailwindCSS.
// 3. Pride flag icon: This icon is used to show solidarity and support for the LGBTQ+ community.

// The component uses the TailwindCSS utility classes to style the layout and appearance of the elements.

// Note: The component receives the darkMode prop to dynamically adjust the appearance of certain elements based on the chosen theme (dark or light mode).

const Footer = ({darkMode}) => {
    return (
        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-between p-4 bg-dark-lime dark:bg-charcoal text-black dark:text-light-gray">
            
            <div className="flex items-center">
                {/* GitHub Link */}
                <a
                    href="https://github.com/corywithane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                >
                    {darkMode ? (
                        <img src={GitHubWhite} alt="light" className="h-6 w-6" />
                    ) : (
                        <img src={GitHubBlack} alt="dark" className="h-6 w-6" />
                    )}
                </a>
                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/g-corey-bennett-5a7bab234/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {darkMode ? (
                        <img src={LinkedInWhite} alt="light" className="h-6 w-6" />
                    ) : (
                        <img src={LinkedInBlack} alt="dark" className="bg-dark-lime h-6 w-6" />
                    )}
                </a>
                </div>
                {/* Center div for copywrite and name info */}
            <div className="flex flex-grow justify-center text-center font-sans">
                <p className="text-xs">2023 GCB<br/> Built by myself, <br/> using React.js and TailwindCSS</p><br/>
            </div>
            <div>
                <img
                    src={Pride}
                    alt="Love is Love"
                    className="w-8 h-8"
                    title="Pride icon by Trazobanana - Flaticon"
                />
            </div>
        </footer>
    );
};

export default Footer;