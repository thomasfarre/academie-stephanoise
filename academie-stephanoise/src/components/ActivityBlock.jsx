import { StarIcon, ClockIcon, CalendarDaysIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Heading from '../components/foundations/Heading';
import BodyText from '../components/foundations/BodyText';
import { Button } from '../components/foundations/Button';

const ActivityBlock = ({
  headingText,
  paragraphs,
  features,
  buttonLabels,
  duration,
  bgColor,
  level,
  activityUrl,
  schedule,
  invert = false,
  targetId,
  images
}) => {

  return (
    <div id={targetId} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-20">
      <div className={`flex flex-col max-w-3xl lg:col-span-3 bg-white p-6 xl:p-8 ${invert ? 'mr-auto lg:order-2' : 'ml-auto'}`}>
        <div className="space-y-2">
          <img
            loading="lazy"
            src={images.icon.src}
            alt={images.icon.alt}
            className={`h-40 w-40 ${bgColor} rounded-2xl`}
          />
          <Heading level={2}>{headingText}</Heading>
        </div>

        <div className="flex-1 space-y-4 pt-4 pb-8">
          {paragraphs.map((text, index) => (
            <BodyText key={index} variant="paragraph">
              {text}
            </BodyText>
          ))}

          <div className="flex items-center flex-wrap gap-8 pt-4">
            <div className="flex items-center space-x-2 ">
              <StarIcon className="text-neutral-600 w-5 h-5 flex-shrink-0" />
              <BodyText variant="label">{level}</BodyText>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="text-neutral-600 w-5 h-5 flex-shrink-0" />
              <BodyText variant="label">{duration}</BodyText>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDaysIcon className="text-neutral-600 w-5 h-5" />
              <BodyText variant="label">{schedule}</BodyText>
            </div>
          </div>

          <div className="gap-4 pt-8 grid grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="px-2 py-2 rounded-full flex items-center justify-center text-center bg-red-50">
                <BodyText variant="label" className="">
                  {feature.text}
                </BodyText>
              </div>
            ))}
          </div>

        </div>

        <div className="flex space-x-8 items-center pt-8 border-t border-neutral-200">
          <a href={`/planning?activity=${encodeURIComponent(activityUrl)}`} className="w-1/2">
          <Button
            onClick={() => {}}
            variant="leadingIcon"
              label={buttonLabels[0]}
              className="w-full"
            >
              <CalendarDaysIcon className="w-5 h-5 mr-2 text-neutral-600" />
            </Button>
          </a>
          <a href="/inscription" className="w-1/2">
          <Button
            onClick={() => {}}
            variant="secondary"
            label={buttonLabels[1]}
            className="w-full"
          >
              <UserPlusIcon className="w-5 h-5 mr-2 text-neutral-200" />
            </Button>
          </a>
        </div>

      </div>
      <div className={`hidden lg:block lg:col-span-2 ${invert ? 'lg:order-1' : ''}`}>
        <img
          loading="lazy"
          className="w-full h-3/4 object-cover rounded-lg shadow-md saturate-0"
          src={images.image.src}
          alt={images.image.alt}
        />
      </div>
    </div>
  );
};

export default ActivityBlock;
