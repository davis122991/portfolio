import { IconGithub, IconLinkedin } from '../common/Icons';
import './Footer.css';

const Footer = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className='footer-wrapper'>
      <div className='footer-container'>
        <ul className='footer-nav'>
          <li>
            <a
              href='#home'
              onClick={(e) => handleScrollToTop(e)}
              className='footer-link'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              onClick={(e) => handleScroll(e, 'about')}
              className='footer-link'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#projects'
              onClick={(e) => handleScroll(e, 'projects')}
              className='footer-link'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#contact'
              onClick={(e) => handleScroll(e, 'contact')}
              className='footer-link'
            >
              Contact
            </a>
          </li>
        </ul>
        <div className='footer-line' />
        <div className='footer-icons'>
          <a
            href='https://www.linkedin.com/in/davis-jankovics-0ba126293/'
            target='_blank'
          >
            <IconLinkedin />
          </a>
          <a href='https://github.com/davis122991' target='_blank'>
            <IconGithub />
          </a>
        </div>
        <p className='footer-copy'>
          &copy; {new Date().getFullYear()} Davis Jankovics. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
