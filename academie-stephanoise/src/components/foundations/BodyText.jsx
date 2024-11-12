// src/components/typography/BodyText.jsx
import PropTypes from 'prop-types';

/**
 * BodyText component for displaying paragraphs, blockquotes, and other body text elements.
 */
export const BodyText = ({ variant, children, className, ...props }) => {
  const variantStyle = {
    headline: "md:text-xl text-lg text-neutral-800",
    paragraph: 'text-neutral-700',
    small: 'text-sm text-neutral-700',
    label: 'text-xs uppercase font-semibold text-neutral-700 tracking-wider',
  };

  return (
    <p className={`${variantStyle[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};

BodyText.propTypes = {
  /**
   * The type of body text to render
   */
  variant: PropTypes.oneOf(['paragraph', 'small', 'label', 'headline']).isRequired,
  /**
   * Content to display inside the BodyText component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
};

export default BodyText;
