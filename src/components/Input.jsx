import React from "react";
import clsx from "clsx";

const Input = ({
  icon,
  rightIcon,
  id,
  label,
  fancyLabel,
  type,
  btn,
  rootClassName,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "custom-form-control",
        { "fancy-label": fancyLabel },
        rootClassName
      )}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-main">
        {icon && <img className="left-icon" src={icon} alt={id} />}
        {rightIcon && <img className="right-icon" src={rightIcon} alt={id} />}
        {fancyLabel && (
          <label htmlFor={id} className="fancy-label">
            {fancyLabel}
          </label>
        )}
        <input id={id} type={type || "text"} {...rest} />
        {btn && <button className="btn btn-gradient">{btn}</button>}
      </div>
    </div>
  );
};

export default Input;
