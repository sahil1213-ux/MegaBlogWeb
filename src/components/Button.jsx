import PropTypes from "prop-types";

function Button({
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  children,
  onClick = () => {},
  className,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
