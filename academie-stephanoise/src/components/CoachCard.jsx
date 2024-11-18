import PropTypes from 'prop-types';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { Heading } from './foundations/Heading';
import { BodyText } from './foundations/BodyText';

const CoachCard = ({ name, disciplines, bio, qualifications, photo }) => {
  return (
    <div className="bg-neutral-800 rounded-2xl shadow-md flex flex-col items-center space-y-4">
      <img loading="lazy" src={photo} alt={`Photo de ${name}`} className="object-cover rounded-t-2xl h-[21rem] w-full object-[10%_23%]" />
      <div className="flex flex-col items-start px-6 space-y-4 pt-4">
        <span className="text-neutral-200 text-4xl tracking-tight font-semibold">{name}</span>
        <div className="flex items-center space-x-2">
          <AcademicCapIcon className="size-6 text-neutral-400" />
          <span className="text-sm uppercase font-semibold text-white tracking-wider">{disciplines}</span>
        </div>
        <p className="text-lg text-neutral-100  h-[25rem] md:h-[30rem] xl:h-[15rem]">{bio}</p>
      </div>

      <div className="w-full px-6 pt-6 pb-8 space-y-2">
        <span className="text-sm uppercase font-semibold text-neutral-400 tracking-wider">Qualifications</span>
        <div className="grid grid-cols-2 gap-2 w-full">
          {qualifications.map((qualification, index) => (
            <div key={index} className="bg-neutral-700 text-neutral-50 text-center py-1 px-2 rounded-full text-sm flex items-center justify-center">
              {qualification}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

CoachCard.propTypes = {
  name: PropTypes.string.isRequired,
  disciplines: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  qualifications: PropTypes.arrayOf(PropTypes.string).isRequired,
  recordLink: PropTypes.string,
  photo: PropTypes.string.isRequired,
};

export default CoachCard;
