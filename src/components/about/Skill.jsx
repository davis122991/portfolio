import './Skill.css';

const Skill = ({ skills }) => {
  return (
    <div className='skills-container'>
      {skills.map((skill, index) => (
        <span key={index} className='skill'>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Skill;
