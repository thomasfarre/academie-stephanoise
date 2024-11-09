import PropTypes from 'prop-types';

export const Heading = ({ level, children, white = false, className = '', ...props }) => {
  const Tag = `h${level}`;
  const styles = {
    1: 'text-6xl font-headline tracking-tight',
    2: 'text-4xl font-headline tracking-tight',
    default: 'text-2xl font-headline tracking-tight'
  };
  const headingStyle = styles[level] || styles.default;
  const textColor = white ? 'text-white' : 'text-stone-900';

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
