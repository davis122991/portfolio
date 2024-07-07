import './Hero.css';

import Section from '../common/Section';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div id='hero'>
      <Section center title='Hello'>
        <h2>I'm Davis Jankovičs!</h2>
        <h3>Full Stack Mobile & Web Developer</h3>
        <div className='button-container'>
          <a href='#'>
            <Button link='#' primary>
              CV
            </Button>
          </a>
          <a href='#'>
            <Button primary>Projects</Button>
          </a>
          <a href='#'>
            <Button link='#'>Contact</Button>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
