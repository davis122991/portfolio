import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

import './Contact.css';

import Button from '../common/Button';
import Section from '../common/Section';

const Contact = () => {
  const [name, setName] = useState({ msg: '', error: '' });
  const [email, setEmail] = useState({ msg: '', error: '' });
  const [message, setMessage] = useState({ msg: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Email format check function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Form validation
    if (!name.msg) {
      setName({ msg: '', error: 'Please enter name!' });
    }
    if (!validateEmail(email.msg)) {
      setEmail((preEmail) => ({
        msg: preEmail.msg,
        error: 'Enter valid email!',
      }));
    }
    if (!message.msg) {
      setMessage({ msg: '', error: 'Message field required!' });
    }
    if (!name.msg || !validateEmail(email.msg) || !message.msg) {
      setIsLoading(false);
      return;
    }

    // Sending an email
    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_USER_ID;
    const data = {
      from_name: name.msg,
      message: message.msg,
      from_email: email.msg,
    };

    emailjs
      .send('service_m3mjmx8', 'template_b9vv07e', data, { publicKey: user_id })
      .then((response) => {
        toast('Email send, I will contact you as soon as possible!', {
          duration: 5000,
          position: 'top-right',
          type: 'success',
        });
        setName({ msg: '', error: '' });
        setEmail({ msg: '', error: '' });
        setMessage({ msg: '', error: '' });
        setIsLoading(false);
      }),
      (err) => {
        toast(`Failed... ${err}`, {
          duration: 5000,
          position: 'top-right',
          type: 'error',
        });
        setIsLoading(false);
      };
  };

  return (
    <div>
      <div id='contact'>
        <Section title='Contact'>
          <form onSubmit={submitHandler}>
            <div className='contact-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                value={name.msg}
                onChange={(e) => setName({ msg: e.target.value, error: '' })}
                className={name.error && 'error'}
              />
              {name.error && <p className='error-msg'>{name.error}</p>}
            </div>
            <div className='contact-group'>
              <label>Email</label>
              <input
                type='email'
                value={email.msg}
                onChange={(e) => setEmail({ msg: e.target.value, error: '' })}
                className={email.error && 'error'}
              />
              {email.error && <p className='error-msg'>{email.error}</p>}
            </div>
            <div className='contact-group'>
              <label>Message</label>
              <textarea
                value={message.msg}
                onChange={(e) => setMessage({ msg: e.target.value, error: '' })}
                className={message.error && 'error'}
              />
              {message.error && <p className='error-msg'>{message.error}</p>}
            </div>
            <div>
              <Button primary submit loading={isLoading}>
                Submit
              </Button>
            </div>
          </form>
        </Section>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: '#d4d4d4',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </div>
  );
};

export default Contact;
