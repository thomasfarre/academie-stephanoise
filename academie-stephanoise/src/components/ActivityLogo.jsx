import Heading from './foundations/Heading';

const ActivityLogo = ({ bgColor, imgSrc, imgAlt, headingText, targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="bg-neutral-800 justify-center items-center flex flex-col space-y-4 p-4 sm:p-6 hover:bg-neutral-700 transition ease-out-300 cursor-pointer"
      onClick={handleClick}
    >
      <img
        loading="lazy"
        className={`max-h-12 w-fit object-contain rounded-2xl ${bgColor}`}
        src={imgSrc}
        alt={imgAlt}
        width="158"
        height="48"
      />
      <Heading level={4} white> {headingText} </Heading>
    </div>
  );
};

export default ActivityLogo;
