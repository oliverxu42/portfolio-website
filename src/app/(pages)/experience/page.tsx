import ExperienceCard from '@/components/Experience';

const experiences = [
  {
    title: 'Casual Academic',
    location: 'UNSW Sydney',
    date: 'Sep 2021 - ',
    content: [
      'Tutoring various computer science and engineering courses such as COMP1531 (Software Engineering Fundamentals), COMP6080 (Web Front-end Programming), COMP3900 (Computer Science Project) and AERO9610 (The Space Segment).',
      'Organising and conducting weekly tutorials for classes of ~25 students, marking and providing constructive feedback on assessment tasks, assisting students with their technical questions and providing general support.',
      'Fostering the love for computer science and aerospace!',
    ],
  },
  {
    title: 'Project Director',
    location: 'UNSW Computer Science and Engineering Society (CSESoc)',
    date: 'Jan 2022 - Dec 2022',
    content: [
      'Led a team of 10 members working on timetabling tool called "Notangles".',
      'Utilised agile project management (with tools like Jira and Confluence) to organise sprints, plan weekly meetings and delagate work between team members.',
      'Maintained a tight knit bunch of friends and encouraged team bonding by organising many dinners, escape rooms, and other fun outings!',
    ],
  },
  {
    title: 'Projects Subcommittee',
    location: 'CSESoc UNSW',
    date: 'Feb 2021 - Dec 2021',
    content: [
      'My first adventure into the world of web development, where I learned the basics of Javascript/Typescript, React, HTML and CSS.',
      'Worked on mobile support and under/post-graduate support for Notangles.',
    ],
  },
];

const extracurriculars = [
  {
    title: 'Training Lead',
    location: 'CSESoc UNSW',
    date: 'Feb 2023 - Sep 2023 ',
    content: [
      'Responsible for leading, mentoring and upskilling groups of trainees (novice software engineers).',
      'Focused on supporting groups through their adventures in building a software project from scratch, provided assistance on project ideation, UI/UX design (figma) and development.',
    ],
  },
  {
    title: 'Peer Mentor',
    location: 'CSESoc UNSW',
    date: 'Feb 2022 - Apr 2022',
    content: [
      'Guided and mentored groups of first year students through their transition from high school to university.',
      'Organised bonding activities, weekly meet-ups, study sessions and supported their general healthy well-being.',
    ],
  },
  {
    title: 'Musician',
    location: 'UNSW Wind Symphony',
    date: 'Feb 2020 - Dec 2022',
    content: [
      'Flutist and pianist for the UNSW Wind Symphony. Attended weekly rehearsals and performed in concerts at the end of each term.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className='container mx-auto my-10 min-h-screen max-w-screen-lg'>
      <h1 className='mb-3 font-bold text-gray-700 text-5xl'>
        The professional stuff.
      </h1>
      <p className='text-lg'>
        Experiences and roles that have made a lasting impact on my professional
        career.
      </p>
      <div className='container flex flex-col my-8 border-t'>
        {experiences.map((e, i) => (
          <ExperienceCard
            title={e.title}
            location={e.location}
            date={e.date}
            content={e.content}
            key={i}
          />
        ))}
      </div>
      <p className='text-lg mt-10'>Some extracurriculars and volunteering.</p>
      <div className='container flex flex-col mt-8 border-t'>
        {extracurriculars.map((e, i) => (
          <ExperienceCard
            title={e.title}
            location={e.location}
            date={e.date}
            content={e.content}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
