import { useState } from 'react';
import './Header.css';
import { IconMenu, IconClose } from '../common/Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event, id) => {
    event.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    const offset = 50;

    if (element) {
      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;

      // Calculate the scroll position with offset from the current scroll position
      const offsetPosition = window.scrollY + elementPosition - offset;

      // Scroll to the calculated position with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = (event) => {
    event.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='navbar' id='header'>
      <div className='navbar-container'>
        <a
          href='#'
          className='navbar-logo'
          onClick={(e) => handleScrollToTop(e)}
        >
          Logo
        </a>
        <div
          className={`menu-icon ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          {isOpen ? <IconClose /> : <IconMenu />}
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <a
              href='#home'
              className='nav-links'
              onClick={(e) => handleScrollToTop(e)}
            >
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#about'
              className='nav-links'
              onClick={(e) => handleScroll(e, 'about')}
            >
              About
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#projects'
              className='nav-links'
              onClick={(e) => handleScroll(e, 'projects')}
            >
              Projects
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#contact'
              className='nav-links'
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
