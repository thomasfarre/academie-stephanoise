import PropTypes from 'prop-types';
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

const ButtonVariants = {
  primary: {
    className: 'bg-stone-900 font-semibold shadow text-white hover:bg-stone-700 focus:ring-stone-900 py-2 px-4',
    content: ({ label }) => (
      <>
        {label}
      </>
    ),
  },
  secondary: {
    className: 'text-stone-900 border font-semibold border-stone-900 bg-white rounded-md shadow hover:bg-stone-100 focus:ring-stone-900 py-2 px-4',
    content: ({ label }) => (
      <>
        {label}
      </>
    ),
  },
  tertiary: {
    className: 'text-stone-900 font-semibold hover:text-stone-700 py-2 focus:ring-transparent flex items-center',
    content: ({ label }) => (
      <>
        {label}
        <ArrowLongRightIcon className="w-6 h-6 ml-2" />
      </>
    ),
  },
  icon: {
    className: 'text-stone-700 hover:text-stone-500 focus:ring-transparent rounded-full p-2',
    content: ({ children }) => children,
  },
};

export const Button = ({ variant = 'primary', onClick, className, label, children, ...props }) => {
  const { className: variantClassName, content } = ButtonVariants[variant];
  const baseStyle = 'rounded focus:outline-none focus:ring-2 transition ease-out duration-300';

  return (
    <button
      className={`${baseStyle} ${variantClassName} ${className} flex items-center justify-center`}
      onClick={onClick}
      {...props}
    >
      {content({ label, children })}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'icon', 'tertiary']),
  children: PropTypes.node,
};

export default Button;
