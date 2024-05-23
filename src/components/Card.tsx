import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  name: string;
  description: string;
  url: string;
  tech: string[];
}

interface ImageProps {
  image: string;
}

interface Index {
  index: number;
}

type ProjectCardProps = Index & CardProps & ImageProps;

const Card: React.FC<CardProps> = ({ name, description, url, tech }) => {
  return (
    <Link
      href={url}
      target='_blank'
      className='border rounded-md w-2/3 min-h-48 p-8 shadow hover:bg-gray-100'
    >
      <div>
        <h2 className='font-medium'>{name}</h2>
        <p className='mt-2'>{description}</p>
      </div>
      <div className='flex mt-4 space-x-2'>
        {tech.map((t, i) => (
          <div
            key={i}
            className='rounded-lg bg-gray-100 p-1.5 text-xs font-medium'
          >
            {t}
          </div>
        ))}
      </div>
    </Link>
  );
};

const ProjectImage: React.FC<ImageProps> = ({ image }) => {
  return (
    <div className='relative w-1/2'>
      <Image
        src={image}
        alt={image.split('.')[0].slice(1)}
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  url,
  image,
  tech,
}) => {
  return (
    <div className='flex w-full space-x-8'>
      {index % 2 === 0 ? (
        <>
          <Card name={name} description={description} url={url} tech={tech} />
          <ProjectImage image={image} />
        </>
      ) : (
        <>
          <ProjectImage image={image} />
          <Card name={name} description={description} url={url} tech={tech} />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
