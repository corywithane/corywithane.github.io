import React from "react";
import GitHubWhite from '../assets/github-white.png';
import GitHubBlack from '../assets/github-black.svg';
import LinkedInWhite from '../assets/linkedin.png';
import LinkedInBlack from '../assets/linkedin-black.svg';
import Pride from '../assets/pride.png';

//
// Footer component: stuck to the bottom of the page, using "fixed" class.  
// Props: darkMode
// Includes: GitHub and LinkedIn clickable icons(go to my pages) in bottom left 
//           "Pride" flag in the corner to show we're an ally
//
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
                <p className="text-sm">2023 GCB<br/> Built by myself, using React.js and TailwindCSS</p><br/>
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