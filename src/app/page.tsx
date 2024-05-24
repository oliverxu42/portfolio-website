import Image from 'next/image';
import Link from 'next/link';

import { IoArrowForwardOutline } from 'react-icons/io5';

const Home: React.FC = () => {
  return (
    <div className='container mx-auto my-auto px-5 py-36'>
      <div className='flex space-x-24 mb-3'>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-bold mb-3'>Hi there! I'm Oliver ✈️</h1>
          <h2 className='text-5xl font-light mb-12'>
            Aerospace and software engineer.
          </h2>
          <p className='text-2xl font-light'>
            Connecting the worlds of space, tech and software development.
          </p>
        </div>
        <div className='md:visible invisible'>
          <Image
            src='/me.jpg'
            alt='oliver xu'
            width={325}
            height={325}
            className='rounded-full'
          ></Image>
        </div>
      </div>

      <div className='mb-10'>
        <Link
          href='/CV_OliverXu_2024.pdf'
          target='_blank'
          className='text-white bg-stone-800 hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-5'
        >
          Résumé
        </Link>
        <Link
          href='/contact'
          className='border hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
        >
          Get in touch
        </Link>
      </div>
      <div className='flex items-center'>
        <Link href='/about' className='flex items-center'>
          Learn more about me
          <IoArrowForwardOutline className='text-gray-600 ml-1' />
        </Link>
      </div>
    </div>
  );
};

export default Home;
