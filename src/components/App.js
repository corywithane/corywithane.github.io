import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';

// 
// App Component: the main container that manages the application's core functionalities, 
//                such as dark mode support and mobile view detection. It renders multiple 
//                child components, passing them the required props to control their behavior 
//                and appearance based on the application's state.
// Props: isMobile, setIsMobile, darkMode, setDarkMode
// Includes:  Mobile View Detection:
//                  -The isMobile state is used to detect if the current view is in mobile mode or not.
//                  -It uses the window.innerWidth to determine the screen width and compares it to the 
//                    mobileBreakpoint value (set to 640 pixels). If the width is less than the breakpoint, 
//                    it sets isMobile to true; otherwise, it sets it to false.
//                  -An event listener is added to the window for detecting resizing. When the user resizes 
//                    the window, it checks whether the view is now in mobile mode or not and updates the 
//                    isMobile state accordingly. 
//            DarkMode Detection:
//                  -The darkMode state is used to keep track of the user's preference for dark or light mode.
//                  -The component checks the localStorage to see if the user has previously set a preference 
//                    for dark mode. If found, it initializes the darkMode state accordingly.
//                  -The toggleDarkMode function allows the user to switch between dark and light mode. When 
//                    the user toggles the mode, it updates the darkMode state and stores the new preference 
//                    in localStorage.     
//          NavBar Component:
//                  -The NavBar component is imported and rendered within the App component.
//                  -The darkMode and toggleDarkMode states are passed as props to allow the NavBar to display
//                     and control the dark mode.
//                  -The isMobile and mobileMenuToggle states are also passed as props to handle the mobile view
//                     and mobile menu toggling.
//          Welcome, About, Projects, and Footer Components:
//                  -These components are also imported and rendered within the App component.
//                  -The darkMode state is passed as props to each of these components to allow them to adjust 
//                    their appearance based on the dark or light mode.
//
function App() {
  const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const mobileBreakpoint = 640; // ADjust based on mobile display

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    useEffect(()=> {
        function handleResize() {
            if(window.innerWidth > mobileBreakpoint) {
                setIsMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [mobileBreakpoint]);
    
    const mobileMenuToggle = () => {
        setIsMobile(!isMobile);
    };

    useEffect(() => {
      // define a custom handler function for the contextmenu event
      const handleContextMenu = (e) => {
        // prevent the right-click menu from appearing
        e.preventDefault()
      }
      // attach event listener to the document object
      document.addEventListener("contextmenu", handleContextMenu)

      // clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener("contextmenu", handleContextMenu)
      }
    },[])

  return (
    <div className="App">
      {/* Pass darkMode and toggleDarkMode as props to NavBar */}
        <NavBar 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          isMobile={isMobile} 
          mobileMenuToggle={mobileMenuToggle}
        />
      {/* Pass darkMode as props to Welcome */}
        <Welcome darkMode={darkMode}
                  isMobile={isMobile}
        />
        <About darkMode={darkMode}/>
        <Projects isMobile={isMobile} 
        />
        <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
