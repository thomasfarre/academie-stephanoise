import PropTypes from 'prop-types';
import { StarIcon, ClockIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Button } from './foundations/Button';
import { Heading } from './foundations/Heading';
import { BodyText } from './foundations/BodyText';
import { UserPlusIcon } from '@heroicons/react/24/outline';

const ActivityCard = ({ name, level, description, bgColor = 'bg-neutral-100', duration, schedule, icon, onSignUp, onViewCalendar }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col space-y-8">
      <div className="flex items-center space-x-4">
        <div className={`rounded-2xl p-1 flex-shrink-0 ${bgColor}`}>{icon}</div>
        <Heading level={4}>{name}</Heading>
      </div>

      <div className="flex-1 space-y-6">
        <BodyText variant="paragraph" className="h-32">{description}</BodyText>
        <div className="space-y-4">

          <div className="flex items-center space-x-2">
            <StarIcon className="text-neutral-600 w-5 h-5" />
            <BodyText variant="label">{level}</BodyText>
          </div>

          <div className="flex items-center space-x-2">
            <ClockIcon className="text-neutral-600 w-5 h-5" />
            <BodyText variant="label">{duration}</BodyText>
          </div>

          <div className="flex items-center space-x-2">
            <CalendarDaysIcon className="text-neutral-600 w-5 h-5" />
            <BodyText variant="label">{schedule}</BodyText>
          </div>
        </div>
        {/* <ul className="list-disc list-inside space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-neutral-700">{benefit}</li>
          ))}
        </ul> */}
      </div>

      <div className="flex space-x-8 items-center pt-8 border-t border-neutral-200">
        <Button
          onClick={onViewCalendar}
          variant="leadingIcon"
          label="Planning"
          className="w-1/2"
        >
          <CalendarDaysIcon className="w-5 h-5 mr-2 text-neutral-600" />
        </Button>
        <Button
          onClick={onSignUp}
          variant="leadingIcon"
          label="S'inscrire"
          className="w-1/2"
        >
          <UserPlusIcon className="w-5 h-5 mr-2 text-neutral-600" />
        </Button>
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
