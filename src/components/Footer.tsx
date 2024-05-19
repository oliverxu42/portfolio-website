import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white border bottom-0 h-20'>
      <div className='w-full h-full mx-auto p-4 px-8 flex md:items-center md:justify-between'>
        <div className='flex space-x-2'>
          <Link href='https://www.linkedin.com/in/olivercxu/' target='_blank'>
            <IoLogoLinkedin size={30} />
          </Link>
          <Link href='https://github.com/oliverxu42' target='_blank'>
            <IoLogoGithub size={30} />
          </Link>
        </div>
        <div className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2024 Oliver Xu. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
