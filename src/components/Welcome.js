import React from 'react';
import Kelp from '../assets/welcome.jpg';

//
// Welcome Component: 
//
//
const Welcome = ({darkMode}) => {
    return (
        <div id = "welcome" className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="welcome-container font-sans flex items-center h-screen w-screen">
                <div className="welcome-color-block sm:w-full lg:w-1/2 h-full bg-light-lime dark:bg-gradient-to-b from-charcoal to-dark-charcoal flex flex-col justify-center items-center">
                    
                    <h1 className="welcome-text text-shadow font-extrabold p-6 m-8 mt-12 text-charcoal dark:text-white">
                    Welcome. Bienvenue.
                    </h1>
                    <p className='acknowledgement text-2xl m-8 p-4 dark:text-light-gray'>
                    As someone who was born and raised on this Island, I would like to acknowledge and thank the Lekwungen and W̱SÁNEĆ peoples, for their welcome and hospitality, as I seek knowledge and shelter on their Traditional Territories.

                    </p>
                </div>
                <div className="welcome-image-container w-1/2 h-full bg-light-lime dark:bg-gradient-to-b from-charcoal to-dark-charcoal">
                    <img src={Kelp} alt="Welcome to my Site" className="welcome-image h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;
