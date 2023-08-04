import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';

// 
// App Component: 
//
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
        <Welcome darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Projects isMobile={isMobile} 
        />
        <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
