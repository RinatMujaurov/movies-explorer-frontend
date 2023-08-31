import React, { useState } from 'react';
import AuthBlock from '../AuthBlock/AuthBlock';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
        <header className="header">
          <Navigation />
        </header>
    // <header className="header">
    //     {isAuthenticated ? (
    //       <Navigation />
    //     ) : (
    //       <AuthBlock />
    //     )}
    // </header>
  );
};

export default Header;


