import Button from '../common/Button';
import Section from '../common/Section';
import './Contact.css';

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    alert('Form Submitted');
  };

  return (
    <div>
      <div id='contact'>
        <Section title='Contact'>
          <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
            <label>Email</label>
            <input type='email' />
            <label>Message</label>
            <textarea />
            <div>
              <Button primary submit>
                Submit
              </Button>
            </div>
          </form>
        </Section>
      </div>
    </div>
  );
};

export default Contact;
