import { forwardRef, useId } from "react";
import PropTypes from "prop-types";

// this can be a controlled or uncontrolled input
const Inputt = forwardRef(
  ({ label, type = "text", className, ...rest }, ref) => {
    const inputId = useId();
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className=" inline-block mb-1 pl-1">
            {label}
          </label>
        )}

        <input
          id={inputId}
          type={type}
          className={`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
          {...rest}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

Inputt.displayName = "Input";

Inputt.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Inputt;
