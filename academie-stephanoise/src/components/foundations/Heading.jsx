import PropTypes from 'prop-types';

export const Heading = ({ level, children, white = false, className = '', ...props }) => {
  const Tag = `h${level}`;
  const styles = {
    1: 'md:text-6xl text-4xl font-semibold tracking-tight font-montserrat ',
    2: 'md:text-4xl text-2xl font-semibold tracking-tight font-montserrat',
    3: 'md:text-2xl text-xl font-semibold font-montserrat',
    default: 'md:text-xl text-lg font-semibold font-montserrat'
  };
  const headingStyle = styles[level] || styles.default;
  const textColor = white ? 'text-white' : 'text-neutral-900';

  return (
    <Tag className={`${headingStyle} ${textColor} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
  className: PropTypes.string,
};

export default Heading;
