import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = (e) => {
    e.preventDefault()
    setDarkMode(!darkMode)
  };

  return (
    <nav>
      <div className="dark-mode__toggle" 
    data-testid="toggle-element">
        <div 
          className={darkMode ? 'toggle toggled' : 'toggle'}
          onClick={toggleMode}
        />
      </div>
      
    </nav>
  )
}

export default Navbar