import PropTypes from "prop-types";
import {
  StarIcon,
  ClockIcon,
  CalendarDaysIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./foundations/Button";
import { Heading } from "./foundations/Heading";
import { BodyText } from "./foundations/BodyText";

const ActivityCard = ({
  name,
  level,
  description,
  bgColor = "bg-neutral-100",
  activityUrl,
  duration,
  schedule,
  children,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col">
      <div>
        <div className={`rounded-2xl p-1 w-fit ${bgColor}`}>
          {children}
        </div>
        <div className="pt-2">
          <span className="md:text-2xl text-lg font-protestStrike text-neutral-900">
            {name}
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-6 pt-4 pb-8">
        <BodyText variant="paragraph" className="h-32">
          {description}
        </BodyText>
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
      </div>

      <div className="flex space-x-8 items-center pt-8 border-t border-neutral-200">
        <a
          href={`/planning?activity=${encodeURIComponent(activityUrl)}`}
          rel="nofollow"
          className="w-1/2"
        >
          <Button variant="leadingIcon" label="Planning" className="w-full">
            <CalendarDaysIcon className="w-5 h-5 mr-2 text-neutral-600" />
          </Button>
        </a>
        <a
          href="/inscription"
          className="w-1/2"
        >
          <Button variant="secondary" label="S'inscrire" className="w-full">
            <UserPlusIcon className="w-5 h-5 mr-2 text-neutral-200" />
          </Button>
        </a>
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
  children: PropTypes.node.isRequired,
};

export default ActivityCard;
