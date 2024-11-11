import { useState } from "react";
import styles from "./Input.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

export const Input = ({
  name,
  validators = {},
  placeholder,
  disabled,
  type = "text",
  icon = '',
  error = '',
  noErrorMessage,
  className,
  inputProps = {},
  register = () => {}
}) => {
  // Reaveal password
  const [passwordRevealed, setPasswordRevealed] = useState(false);

  return (
    <div
      className={cn(styles.root, {
        [className]: className,
        [styles.rootWithError]: error && !noErrorMessage
      })}
    >

      <input
        type={passwordRevealed ? "text" : type}
        name={name}
        className={cn(styles.input, {
          [styles.invalid]: !!error,
          [styles.inputWithIcon]: !!icon,
          [styles.disabled]: disabled
        })}
        disabled={disabled}
        placeholder={placeholder}
        {...register(name, validators)}
        {...inputProps}
      />

      {type === "password" && (
        <span
          className={cn(styles.showPassword, "u-link", "dark")}
          onMouseDown={() => setPasswordRevealed(true)}
          onMouseUp={() => setPasswordRevealed(false)}
          onMouseLeave={() => setPasswordRevealed(false)}
        >
          Show
        </span>
      )}

      {error && !noErrorMessage && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "number", "date"]),
  placeholder: PropTypes.string,
  validators: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  inputProps: PropTypes.object,
  actionIcon: PropTypes.string,
  onActionClick: PropTypes.func,
};