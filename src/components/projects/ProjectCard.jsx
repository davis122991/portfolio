import Button from '../common/Button';
import Paragraph from '../common/Paragraph';
import ImageSlider from './ImageSlider';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className='project-main'>
      <h3 className='project-title'>{project.name}</h3>
      <div className='project-wrapper'>
        {/* Details */}
        <div style={{ flex: 5 }}>
          <Paragraph>{project.description}</Paragraph>
        </div>
        {/* Image slider */}
        <div style={{ flex: 4 }}>
          <ImageSlider images={project.img} />
        </div>
      </div>
      <div className='project-btn'>
        <a href={project.liveLink} target='_blank'>
          <Button primary>Live Link</Button>
        </a>
        <a href={project.codeLink} target='_blank'>
          <Button primary>Code Link</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
