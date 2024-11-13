import PropTypes from 'prop-types';

export const Heading = ({ level, children, white = false, className = '', ...props }) => {
  const Tag = `h${level}`;
  const styles = {
    1: 'md:text-7xl text-5xl tracking-tight font-protestStrike',
    2: 'md:text-5xl text-3xl tracking-tight font-protestStrike',
    3: 'md:text-3xl text-2xl tracking-tight font-protestStrike',
    default: 'md:text-2xl text-lg font-protestStrike'
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
