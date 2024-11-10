import PropTypes from 'prop-types';
import { Heading } from './foundations/Heading';
import { BodyText } from './foundations/BodyText';

const CoachCard = ({ name, disciplines, bio, qualifications, recordLink, photo }) => {
  return (
    <div className="bg-neutral-700 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4">
      <img src={photo} alt={`Photo de ${name}`} className="w-32 h-32 rounded-full object-cover" />
      <Heading level={4} white="true">{name}</Heading>
      <BodyText variant="paragraph" className="text-sm text-neutral-50">Disciplines : {disciplines}</BodyText>
      <BodyText variant="paragraph" className="text-neutral-50 text-center">{bio}</BodyText>

      <div className="w-full mt-4 space-y-2">
        <Heading level={5} white="true">Qualifications</Heading>
        <ul className="list-disc list-inside text-neutral-50 space-y-1">
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>

      {recordLink && (
        <a
          href={recordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline mt-4"
        >
          Voir le palmarès complet
        </a>
      )}
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
