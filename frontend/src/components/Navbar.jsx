import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.png';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="relative flex items-center justify-between p-4 mx-auto max-w-10xl">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Aryavarta Sangh Logo" className="h-10 md:h-12" />
          <span className="text-xl font-bold text-orange-400 md:text-2xl">Aryavarta sangh</span>
        </div>

        <div className="items-center hidden space-x-6 lg:flex">
          <div className="flex items-center space-x-2 text-sm text-white">
            <HashLink smooth to="/#home" className="hover:text-orange-400">Home</HashLink><span>|</span>
            <HashLink smooth to="/#about" className="hover:text-orange-400">About</HashLink><span>|</span>
            <HashLink smooth to="/#leaders" className="hover:text-orange-400">Leaders</HashLink><span>|</span>
            <HashLink smooth to="/#voices" className="hover:text-orange-400">Voices</HashLink><span>|</span>
            <HashLink smooth to="/#social-work" className="hover:text-orange-400">Social work</HashLink><span>|</span>
            <HashLink smooth to="/#news" className="hover:text-orange-400">News</HashLink>
          </div>
          <div className="flex items-center space-x-2">
            <SearchIcon />
            <span className="text-sm text-white">Search here</span>
          </div>
          <div className="h-8 border-l border-gray-500"></div>
          <div className="flex items-center space-x-4">
            <Link to="/join-us">
              <button className="px-5 py-2 text-sm font-semibold text-black bg-gray-200 rounded-2xl hover:bg-opacity-80">
                JOIN US!
              </button>
            </Link>
            <Link to="/donate-us">
              <button className="px-5 py-2 text-sm font-semibold text-black bg-gray-200 rounded-2xl hover:bg-opacity-80">
                DONATE US!
              </button>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-black top-full bg-opacity-90 lg:hidden">
          <div className="flex flex-col items-center p-4 space-y-4 text-white">
            <HashLink smooth to="/#home" onClick={closeMenu} className="hover:text-orange-400">Home</HashLink>
            <HashLink smooth to="/#about" onClick={closeMenu} className="hover:text-orange-400">About</HashLink>
            <HashLink smooth to="/#leaders" onClick={closeMenu} className="hover:text-orange-400">Leaders</HashLink>
            <HashLink smooth to="/#voices" onClick={closeMenu} className="hover:text-orange-400">Voices</HashLink>
            <HashLink smooth to="/#social-work" onClick={closeMenu} className="hover:text-orange-400">Social work</HashLink>
            <HashLink smooth to="/#news" onClick={closeMenu} className="hover:text-orange-400">News</HashLink>
            <div className="flex items-center pt-4 space-x-4">
                <Link to="/join-us" onClick={closeMenu}>
                  <button className="px-5 py-2 text-sm font-semibold text-black bg-gray-200 rounded-2xl hover:bg-opacity-80">
                    JOIN US!
                  </button>
                </Link>
                <Link to="/donate-us" onClick={closeMenu}>
                  <button className="px-5 py-2 text-sm font-semibold text-black bg-gray-200 rounded-2xl hover:bg-opacity-80">
                    DONATE US!
                  </button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
