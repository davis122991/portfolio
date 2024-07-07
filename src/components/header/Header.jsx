import { useState } from 'react';
import { IconMenu, IconClose } from '../common/Icons';

import './Header.css';

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-logo'>LOGO</div>
        <div className='header-toggle' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IconClose /> : <IconMenu />}
        </div>
        <ul className={`header-nav ${isOpen && 'header-nav-active'}`}>
          <li className='header-nav-item'>
            <a onClick={(e) => handleScrollToTop(e)}>Home</a>
          </li>
          <li className='header-nav-item'>
            <a onClick={(e) => handleScroll(e, 'about')}>About</a>
          </li>
          <li className='header-nav-item'>
            <a onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
          </li>
          <li className='header-nav-item'>
            <a onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NewHeader;
