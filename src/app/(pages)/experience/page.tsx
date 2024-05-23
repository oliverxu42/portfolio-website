import ExperienceCard from '@/components/Experience';

const experiences = [
  {
    title: 'Casual Academic',
    location: 'UNSW Sydney',
    date: 'Sep 2021 - ',
    content: [
      'Tutoring various computer science and engineering courses such as COMP1531 (Software Engineering Fundamentals), COMP6080 (Web Front-end Programming), COMP3900 (Computer Science Project) and AERO9610 (The Space Segment).',
      'Organising and conducting weekly tutorials for classes of ~25 students',
    ],
  },
  {
    title: 'Project Director',
    location: 'UNSW Computer Science and Engineering Society (CSESoc)',
    date: 'Jan 2022 - Dec 2022',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedquis felis lorem. Sed posuere dolor libero, ac commodo enimiaculis ac.',
      ' Etiam blandit neque nec convallis dignissim. Nulla facilisi. Fusce sagittis libero ac venenatis interdum. Maecenas id arcusem.',
      'Sed metus purus, sodales eget rutrum id, mollis ut enim. Curabitur semper diam a purus pulvinar, sed ornare metussuscipit.',
    ],
  },
  {
    title: 'Projects Subcommittee',
    location: 'CSESoc UNSW',
    date: 'Feb 2021 - Dec 2021',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedquis felis lorem. Sed posuere dolor libero, ac commodo enimiaculis ac.',
      ' Etiam blandit neque nec convallis dignissim. Nulla facilisi. Fusce sagittis libero ac venenatis interdum. Maecenas id arcusem.',
      'Sed metus purus, sodales eget rutrum id, mollis ut enim. Curabitur semper diam a purus pulvinar, sed ornare metussuscipit.',
    ],
  },
];

const extracurriculars = [
  {
    title: 'Training Lead',
    location: 'CSESoc UNSW',
    date: 'Feb 2023 - Sep 2023 ',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedquis felis lorem. Sed posuere dolor libero, ac commodo enimiaculis ac.',
    ],
  },
  {
    title: 'Peer Mentor',
    location: 'CSESoc UNSW',
    date: 'Feb 2022 - Apr 2022',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedquis felis lorem. Sed posuere dolor libero, ac commodo enimiaculis ac.',
    ],
  },
  {
    title: 'Musician',
    location: 'UNSW Wind Symphony',
    date: 'Feb 2020 - Dec 2022',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedquis felis lorem. Sed posuere dolor libero, ac commodo enimiaculis ac.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className='container mx-auto mt-10 min-h-screen max-w-screen-lg'>
      <h1 className='mb-3 font-bold text-gray-700 text-5xl'>
        The professional stuff.
      </h1>
      <p className='text-lg'>
        Experiences and roles that have made a lasting impact on my professional
        career.
      </p>
      <div className='container flex flex-col mt-12'>
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
      <p className='text-lg'>Some extracurriculars and volunteering.</p>
      <div className='container flex flex-col mt-12'>
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
