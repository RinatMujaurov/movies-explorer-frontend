import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthBlock from '../AuthBlock/AuthBlock';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { ROUTES_WITH_HEADER } from '../../utils/constants/routes-constants';

function Header() {
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const hasHeader = ROUTES_WITH_HEADER.includes(pathname);

  return (
    hasHeader && (
        <header className="header">
          <Navigation />
        </header>
    )    
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


