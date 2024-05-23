import ProjectCard from '@/components/Card';

const projects = [
  {
    name: 'Notangles',
    description:
      'A drag-and-drop timetabling web app used by 4000+ UNSW students. As director in 2022, we deployed many cool features including custom user event support, auto-timetabling and various other quality of life additions.',
    url: 'https://notangles.devsoc.app/',
    image: '/notangles.gif',
    tech: [
      'React',
      'Typescript',
      'Styled Components',
      'Express',
      'Node.js',
      'gRPC',
    ],
  },

  {
    name: 'Something Awesome',
    description:
      'An educational web platform designed for students to learn about cyber security vulnerabilities. I created articles and coded up demos focusing on topics such as SQL injection attacks, cross-site scripting and other web security vulnerabilities.',
    url: 'https://github.com/oliverxu42/something-awesome',
    image: '/something-awesome.png',
    tech: ['Next.js', 'Tailwind CSS', 'Javascript', 'Express', 'MySQL'],
  },
  {
    name: 'My Portfolio Website',
    description:
      "The website you're currently on! Created as a small personal project to stave off boredom during the uni break :))",
    url: 'https://github.com/oliverxu42/portfolio-website',
    image: '/website.png',
    tech: ['Next.js', 'Tailwind CSS', 'Typescript'],
  },
  {
    name: 'Partnr',
    description:
      "A web app designed to help uni students find their ideal team members for their group projects. Created as part of CSESoc's Training Program, where I as a training lead, helped upskill and mentor a small group of novice software engineers.",
    url: 'https://github.com/csesoc/trainee-1-23t1',
    image: '/partnr.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Typescript', 'Firebase'],
  },
];

const Projects: React.FC = () => {
  return (
    <div className='container mx-auto mt-10 min-h-screen max-w-screen-lg'>
      <h1 className='mb-3 font-bold text-gray-700 text-5xl'>
        Turning ideas into reality.
      </h1>
      <p className='text-lg'>
        Cool and interesting stuff I've worked on throughout my time at uni.
      </p>
      <div className='container flex flex-col space-y-12 mt-12 mb-20'>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            index={i}
            name={p.name}
            description={p.description}
            url={p.url}
            image={p.image}
            tech={p.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
