import PropTypes from 'prop-types';
import { StarIcon, ClockIcon, CalendarDaysIcon } from '@heroicons/react/20/solid';

const ActivityCard = ({ name, level, description, duration, benefits, schedule, icon, onSignUp, onViewCalendar }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow">
      <div className="bg-gray-100 rounded-lg p-1 w-fit">{icon}</div>
      <div className="flex items-center space-x-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>

      <div className="text-sm text-gray-600 space-y-4">
        <p>{description}</p>
         <div className="flex items-center space-x-2 mt-2">
          <StarIcon className="text-gray-600 w-5 h-5" />
          <span className="font-medium text-gray-700">{level}</span>
        </div>

        <div className="flex items-center space-x-2">
          <ClockIcon className="text-gray-600 w-5 h-5" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center space-x-2">
          <CalendarDaysIcon className="text-gray-600 w-5 h-5" />
          <span>{schedule}</span>
        </div>
        <ul className="list-disc list-inside space-y-1 mt-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-8 items-center pt-8">
        <button
          onClick={onViewCalendar}
          className="text-neutral-900 hover:underline"
        >
          Voir le calendrier
        </button>
        <button
          onClick={onSignUp}
          className="bg-neutral-900 text-white py-2 px-4 rounded-full hover:bg-neutral-800 transition-colors"
        >
          S'inscrire
        </button>
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onViewCalendar: PropTypes.func.isRequired,
};

export default ActivityCard;
