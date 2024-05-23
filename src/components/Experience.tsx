interface ExperienceProps {
  title: string;
  location: string;
  date: string;
  content: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  location,
  date,
  content,
}) => {
  return (
    <div className='border-t w-full min-h-36 flex'>
      <div className='min-w-[25%] max-w-[25%] p-3'>
        <h2 className='font-semibold mb-2'>{title}</h2>
        <h3 className='font-light text-base/loose'>{location}</h3>
        <h3 className='font-light text-base/loose'>{date}</h3>
      </div>
      <div className='p-3 ml-16'>
        <ul className='list-disc'>
          {content.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
