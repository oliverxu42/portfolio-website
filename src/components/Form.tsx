'use client';

import { notifyError, notifySuccess } from '@/utils/notifications';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, message);

    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      notifySuccess('Email successfully sent');
    } else {
      notifyError('Error sending email, please try again later');
    }
  };

  return (
    <form
      className='max-w-md mx-auto border rounded-xl p-12'
      onSubmit={sendEmail}
    >
      <div className='mb-5'>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your name
          </label>
          <input
            type='name'
            id='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your email
        </label>
        <input
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <label
        htmlFor='message'
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        Your message
      </label>
      <textarea
        id='message'
        rows={4}
        className='mb-8 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 '
        placeholder='Leave a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type='submit'
        className='text-white bg-gray-900 hover:bg-gray-700 font-medium rounded-lg text-sm w-full px-5 py-2 text-center'
      >
        Send
      </button>
      <div className='flex space-x-2 justify-center mt-8'>
        <Link href='https://www.linkedin.com/in/olivercxu/' target='_blank'>
          <IoLogoLinkedin size={36} />
        </Link>
        <Link href='https://github.com/oliverxu42' target='_blank'>
          <IoLogoGithub size={36} />
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
