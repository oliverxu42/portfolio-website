import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className='container mx-auto mt-10 min-h-screen max-w-screen-md text-base/7'>
      <h2 className='font-semibold'>A little bit about myself...</h2>
      <p className='my-2'>
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
      <p className='my-2'>
        My academic passions lie in blending together the worlds of space and
        software; from my current adventure into ML solutions for tracking and
        removing space debris as part of my undergraduate thesis, to my casual
        academic teaching work at UNSW where I tutor various computer science
        and aerospace engineering courses.
      </p>
      <p className='my-2'>
        Outside of academia, I'm an avid music lover (especially classical),
        motorcyclist, aviation enthusiast, and I love working on personal
        software{' '}
        <Link href='/projects' className='font-semibold italic hover:underline'>
          projects!
        </Link>{' '}
        But more on that later...
      </p>
      <h2 className='font-semibold mb-2 mt-8'>My journey and what I do...</h2>
      <p>
        As a kid growing up I've always had a... from building way too many Lego
        sets, even tearing them apart to create my own imaginations, to
        obsessing over the inner workings of pretty much anything that moves
        (cars, motorbikes, planes...). When it came time to choose my path after
        graduating from high school, engineering was unmistakeably the right
        choice. ... I've explored a wealth of knowledge in both disciplines,
        learning about the fundamentals of flight, aerodynamics, propulsion,
        space systems and much more, whilst continuing to hone my programming
        skills, focusing on web development, cyber security, data structures,
        algorithms and the list goes on. I've learnt to work as team, whether
        that be through uni projects, work or other extracurricular leadership
        roles, but also independent and self-sufficient.
      </p>
      <h2 className='font-semibold my-2 mt-8'>
        The future and where I'm going...
      </h2>
      <p>
        Today, I'm wrapping up my degree and focusing on making the best out of
        my studies for the reminder of my time at uni. I hope to be able to
        bring my experiences, passion and skills to work together on amazing
        things.
      </p>
    </div>
  );
};

export default About;
