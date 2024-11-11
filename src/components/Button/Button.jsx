import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({
  id,
  className,
  type = 'primary',
  submit = false,
  small = false,
  disabled = false,
  children,
  buttonProps = {},
  onClick = () => {}
}) => (
  <button 
    id={id}
    className={cn(styles.root, styles[`root--${type}`], {
      [styles.rootSmall]: small,
      [className]: className,
    })}
    type={submit ? 'submit' : 'button'}
    disabled={disabled} 
    onClick={onClick}
    {...buttonProps}
  >
    {children}
  </button>
)