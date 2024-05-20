import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className='container mx-auto px-10 mt-10 min-h-screen max-w-screen-md'>
      <h2 className='font-semibold'>A little bit about myself...</h2>
      <p className='my-4'>
        Hi there, I'm Oliver! Currently a final year (honours) student studying
        computer science and aerospace engineering at{' '}
        <Link
          href='https://www.unsw.edu.au/engineering'
          target='_blank'
          className='font-semibold italic hover:underline'
        >
          UNSW Sydney.{' '}
        </Link>
      </p>
      <p className='my-4'>
        My academic passions lie in blending together the worlds of space and
        software; from my current adventure into ML solutions for tracking and
        removing space debris as part of my undergraduate thesis, to my casual
        academic teaching work at UNSW where I tutor various computer science
        and aerospace engineering courses.
      </p>
      <p className='my-4'>
        Outside of academia, I'm an avid music lover (especially classical),
        motorcyclist, aviation enthusiast, and I love working on personal
        software{' '}
        <Link href='/projects' className='font-semibold italic hover:underline'>
          projects!
        </Link>{' '}
        But more on that later...
      </p>
      <h2 className='font-semibold my-8'>
        My background and why I do what I do...
      </h2>
    </div>
  );
};

export default About;
