import Section from '../common/Section';
import './About.css';

import { about } from '../constants';
import Paragraph from '../common/Paragraph';
import Skill from './Skill';

const About = () => {
  return (
    <div id='about'>
      <Section title='About' center>
        <div className='about-wrapper'>
          <div style={{ flex: 5 }}>
            <h1>My Story</h1>
            <Paragraph>{about.myStory[0]}</Paragraph>
            <Paragraph>{about.myStory[1]}</Paragraph>
          </div>
          <div style={{ flex: 4 }}>
            <h1>My Skills</h1>
            <Skill skills={about.mySkills} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
