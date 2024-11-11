import styles from './InputGroup.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const InputGroup = ({ 
  children, 
  className,
  description,
  title,
  error,
  strong=false,
  inline=false
}) => (
  <div className={cn(styles.root, { [className]: className, [styles.rootInline]: inline })}>
    <span className={cn(styles.title, { [styles.titleStrong]: strong, [styles.titleError]: error, [styles.titleNoMargin]: !!description })}>
      {title}
    </span>
    {description &&
      <span className='u-margin-bottom--small d-block t-tiny text-secondary'>{description}</span>
    }
    <div className={styles.input}>
      {children}
    </div>
  </div>
)

InputGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  children: PropTypes.any,
  inline: PropTypes.bool,
  strong: PropTypes.bool,
};