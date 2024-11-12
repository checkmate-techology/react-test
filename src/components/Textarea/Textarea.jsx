import styles from './Textarea.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import autosize from "autosize";

export const Textarea = ({
  name,
  validators = {},
  placeholder,
  className,
  inputProps = {},
  dynamicHeight,
  register = () => {}
}) => {

  useEffect(() => {
    if (dynamicHeight) {
      autosize(document.querySelectorAll('.' + className))
    }
  })

  return (
    <textarea
      name={name}
      className={cn(styles.root, { [className]: className })}
      placeholder={placeholder}
      {...register(name, validators)}
      {...inputProps}
    />
  )
}

Textarea.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.object,
  className: PropTypes.string,
  inputProps: PropTypes.object,
  dynamicHeight: PropTypes.bool,
};
