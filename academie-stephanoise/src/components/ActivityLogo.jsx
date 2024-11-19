import Heading from './foundations/Heading';

const ActivityLogo = ({ headingText, targetId, children }) => {
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
      {children}
      <Heading level={4} white> {headingText} </Heading>
    </div>
  );
};

export default ActivityLogo;
