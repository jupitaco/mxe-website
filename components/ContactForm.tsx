'use client';

import React, { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      // Ensure form.current is not null
      emailjs
        .sendForm('service_wuusuz5', 'template_k4q4ges', form.current, {
          publicKey: 'NSc_y2yaOTP_Vcn61',
        })
        .then(
          (res) => {
            console.log(res);
            console.log('SUCCESS!');
            toast.success('Form submitted successfully. 🎉');
            setLoading(false);
            window.location.reload();
          },
          (error) => {
            setLoading(false);
            console.log('FAILED...', error.text);
          },
        );
    } else {
      setLoading(false);
      console.log('Form reference is null.');
    }
  };
  return (
    <form
      onSubmit={sendEmail}
      className='flex flex-1 flex-wrap justify-between gap-4 lg:px-5 px-3 '
      ref={form}
    >
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor='fullName' className='text-start'>
          {' '}
          Full Name
        </label>
        <input
          type='text'
          name='fullName'
          className='form-controls'
          placeholder='John Doe'
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor='email' className='text-start'>
          {' '}
          Email Address
        </label>
        <input
          type='email'
          name='email'
          className='form-controls'
          placeholder='johndoe@mail.com'
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor='subject' className='text-start'>
          {' '}
          Subject
        </label>
        <input
          type='text'
          name='subject'
          className='form-controls'
          placeholder='Create a subject...'
        />
      </div>

      <div className='flex w-full flex-col gap-2'>
        <label htmlFor='message' className='text-start'>
          {' '}
          Message
        </label>
        <textarea
          name='message'
          className='form-controls'
          rows={4}
          placeholder='Enter your message...'
        />
      </div>
      <div className='flex w-full justify-end'>
        <button
          className='main-btn !bg-black !rounded-lg w-full'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Sending.....' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
