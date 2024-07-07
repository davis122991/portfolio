import Section from '../common/Section';

import { projects } from '../constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects'>
      <Section center title='Projects'>
        {/* <ProjectCard project={projects[0]} /> */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Section>
    </div>
  );
};

export default Projects;
