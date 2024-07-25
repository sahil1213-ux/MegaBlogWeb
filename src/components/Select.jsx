import { forwardRef } from "react";
import PropTypes from "prop-types";

const Select = (props, ref) => {
  const { options, label, className, inputId } = props;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <select
        {...props}
        id={inputId}
        // value={props.value}
        className={`w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
        ref={ref}
      >
        {options.map((option, index) => {
          // If options is an array of objects with `value` and `label`
          if (typeof option === "object") {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          }
          // If options is an array of strings
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

// forwardRef is a higher-order component that forwards refs to the component it wraps.
const SelectWithRef = forwardRef(Select);

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  className: PropTypes.string, // This line validates the 'className' prop
  inputId: PropTypes.string,
};

export default SelectWithRef;
