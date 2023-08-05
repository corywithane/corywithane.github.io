import React from 'react';
import Kelp from '../assets/welcome.jpg';

// Welcome Component: This is a React component that serves as the landing page for the portfolio website. It includes a welcome message and a land acknowledgement.
// Props: 
// - darkMode: A boolean prop used to toggle the dark-mode or light-mode onto the top-level <div>.
// - isMobile: A boolean prop that determines whether the component is being rendered on a mobile device or not.

// The component consists of two main sections:
// 1. A left-side container with a lime-colored background in light mode (or gradient background in dark mode). It contains a welcome message in multiple languages.
// 2. A right-side container with the same background as the left-side. It contains an image representing the "West Bay Walkway."

// The welcome message acknowledges the Lekwungen and W̱SÁNEĆ peoples for their welcome and hospitality on their Traditional Territories.

// Note: The lime drop shadow effect is applied when the darkMode prop is true.
const Welcome = ({ darkMode, isMobile }) => {
    return (
        <div id="welcome" className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="welcome-container font-sans flex items-center h-screen w-screen">
                <div className="welcome-color-block sm:w-full lg:w-1/2 h-full bg-light-lime dark:bg-gradient-to-b from-charcoal to-dark-charcoal flex flex-col justify-center items-center">
                    <h1 className="welcome-text text-shadow font-extrabold p-4 m-2 text-charcoal dark:text-white">
                        Welcome. Bienvenue.
                    </h1>
                    <p className='acknowledgement text-2xl m-8 p-4 dark:text-light-gray'>
                        As someone who was born and raised on this Island, I would like to acknowledge and thank the Lekwungen and W̱SÁNEĆ peoples, for their welcome and hospitality, as I seek knowledge and shelter on their Traditional Territories.
                    </p>
                </div>
                {!isMobile && (
                    <div className="welcome-image-container w-1/2 h-full bg-light-lime dark:bg-gradient-to-b from-charcoal to-dark-charcoal">
                        <img src={Kelp} alt="West Bay Walkway" className="welcome-image h-full object-cover" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Welcome;

// const Welcome = ({darkMode, isMobile}) => {
//     return (
//         <div id = "welcome" className={darkMode ? "dark-mode" : "light-mode"}>
//             <div className="welcome-container font-sans flex items-center h-screen w-screen">
//                 <div className="welcome-color-block sm:w-full lg:w-1/2 h-full bg-light-lime dark:bg-gradient-to-b from-charcoal to-dark-charcoal flex flex-col justify-center items-center">
                    
//                     <h1 className="welcome-text text-shadow font-extrabold p-6 m-8 mt-12 text-charcoal dark:text-white">
//                     Welcome. Bienvenue.
//                     </h1>
//                     <p className='acknowledgement text-2xl m-8 p-4 dark:text-light-gray'>
//                     As someone who was born and raised on this Island, I would like to acknowledge and thank the Lekwungen and W̱SÁNEĆ peoples, for their welcome and hospitality, as I seek knowledge and shelter on their Traditional Territories.

//                     </p>
//                 </div>
//                 <div className="welcome-image-container w-1/2 h-full bg-light-lime dark:bg-gradient-to-b from-charcoal to-dark-charcoal">
//                     <img src={Kelp} alt="West Bay Walkway" className={`welcome-image h-full object-cover ${isMobile ? 'hidden' : null }`} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Welcome;
