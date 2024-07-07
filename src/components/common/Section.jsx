import './Section.css';

const Section = ({ children, title, center }) => {
  return (
    <section
      className='section-container'
      style={
        center && {
          display: 'flex',
          alignItems: 'center',
        }
      }
    >
      <div style={{ width: '100%' }}>
        <h1 className='section-title'>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
