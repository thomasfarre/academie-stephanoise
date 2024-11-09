import PropTypes from 'prop-types';

const ActivityCard = ({ name, level, description, duration, benefits, schedule, icon, onSignUp, onViewCalendar }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md space-y-4 hover:shadow-xl transition-shadow">
      <div className="bg-gray-100 rounded-lg p-1 w-fit">{icon}</div>
      <div className="flex items-center space-x-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>

      <div className="text-sm text-gray-600 space-y-4">
        <p>{description}</p>
        <p className="mt-2 font-medium text-gray-700">Niveau: {level}</p>
        <p className="mt-1">Durée: {duration}</p>
        <p className="mt-1">Horaires: {schedule}</p>
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
