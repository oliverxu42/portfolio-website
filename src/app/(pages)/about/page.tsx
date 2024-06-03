import Image from 'next/image';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className='container mx-auto mt-10 min-h-screen max-w-screen-lg text-base/7'>
      <div className='flex px-16'>
        <div className='w-5/6'>
          <h1 className='mb-3 font-bold text-gray-700 text-5xl'>About me.</h1>
          <p className='text-lg mb-8'>Who am I and what I do.</p>{' '}
          <h2 className='font-semibold'>A little bit about myself...</h2>
          <p className='my-2'>
            Hi there, I'm Oliver! Currently a final year (honours) student
            studying computer science and aerospace engineering at{' '}
            <Link
              href='https://www.unsw.edu.au/engineering'
              target='_blank'
              className='font-semibold italic hover:underline'
            >
              UNSW Sydney.{' '}
            </Link>
          </p>
          <p className='my-2'>
            My academic passions lie in blending together the worlds of space
            and software; from my current adventure into ML solutions for
            tracking and removing space debris as part of my undergraduate
            thesis, to my casual academic teaching work at UNSW where I tutor
            various computer science and aerospace engineering courses.
          </p>
          <p className='my-2'>
            Outside of academia, I'm an avid music lover (especially classical),
            motorcyclist, aviation enthusiast, and I love working on personal
            software{' '}
            <Link
              href='/projects'
              className='font-semibold italic hover:underline'
            >
              projects!
            </Link>{' '}
            But more on that later...
          </p>
          <h2 className='font-semibold mb-2 mt-8'>
            My journey and what I've done...
          </h2>
          <p className='my-2'>
            As a kid growing up I've always had a fascination about the complex
            world that we live in. How do these complicated systems and
            structures come together to create things that have such a
            significance in our lives? It started with me as a child spending
            far too much time building way too many Lego sets, even tearing them
            apart to create my own imaginations, to obsessing over the inner
            workings of pretty much anything that moves (cars, motorbikes,
            planes...). When it came time to choose my path after graduating
            from high school, engineering was unmistakably the right choice.
          </p>
          <p className='my-2'>
            Throughout my time at uni I've explored a wealth of knowledge in
            both disciplines, learning about the fundamentals of flight,
            aerodynamics, propulsion, space systems and much more, whilst
            continuing to hone my programming skills, focusing on web
            development, cyber security, data structures, algorithms and the
            list goes on. I've learnt to work as a team, whether that be through
            uni projects, work or other extracurricular leadership roles, but
            also to be independent and self-sufficient.
          </p>
          <p className='my-2'>
            I've had the opportunity of being able to lead teams of passionate
            engineers, making life-long friends along the way, and helping
            inspire the next generation of engineering students.
          </p>
          <h2 className='font-semibold my-2 mt-8'>
            The future and where I'm going...
          </h2>
          <p className='mb-12'>
            Today, I'm wrapping up my degree and focusing on making the best out
            of my studies for the remainder of my time at uni. I hope to be able
            to bring my experiences, passion and skills to work together on
            amazing things.
          </p>
        </div>
        <div className='ml-12'>
          <Image
            src='/me_2.jpg'
            alt='oliver xu'
            width={250}
            height={500}
            className=' float-right ml-10 mt-32 rounded-lg drop-shadow-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
