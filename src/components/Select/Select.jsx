import { createContext, useEffect, useContext, useState, useRef, useMemo, Children } from 'react';
import { useCombinedRefs } from 'hooks/combined-refs';
import { useClickOutside } from 'hooks/click-outside';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';
import cn from 'classnames';
import { ChangeEvent } from 'utils/form-utils';

const SelectContext = createContext(null);

const useSelectContext = () => {
  const context = useContext(SelectContext)
  if (!context) throw new Error(`Select compound components cannot be rendered outside the Select component`)
  return context
}

export const Select = ({
  name,
  validators = {},
  className,
  placeholder = '',
  disabled,
  children,
  inputProps = {},
  value,
  useDefault = false,
  register = (...args) => ({ ref: () => {} }),
}) => {

  // Be able to use ref with register
  const { ref, ...registerProps } = register(name, validators);
  const inputRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, inputRef);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setShowMenu(false));
  
  const [options, setOptions] = useState([]);
  const [optionLabel, setOptionLabel] = useState();
  const [searchQuery, setSearchQuery]  = useState('');

  const [ showMenu, setShowMenu ] = useState(false);

  // Store options
  useEffect(() => {
    setOptions(Children.toArray(children).map(child => ({ label: child.props.children, value: child.props.value })))
  }, [children]);

  // Set label 
  useEffect(() => {
    if(options.length < 1) setOptionLabel('');

    const option = options.find(option => option.value == value);
    setOptionLabel(option?.label);
  }, [value, options.length])

  // Set default
  useEffect(() => {
    if(!useDefault || value || options.length < 1) return;

    if(options[0].value === value) return;

    setOption(options[0].value);
  }, [value, useDefault, options]);

  // Set option
  const setOption = (value) => {
    setShowMenu(false);

    const onChange = registerProps?.onChange || inputProps?.onChange;
    onChange(ChangeEvent(name, value));
  }

  // Expose to context
  const contextValue = useMemo(() => ({ setOption, searchQuery }), [options, searchQuery])

  // Empty search
  useEffect(() => { if(!showMenu) setSearchQuery('') }, [showMenu])

  return (
    <SelectContext.Provider value={contextValue}>
      <div ref={wrapperRef} className={cn(styles.root, { [className]: className })}>
        <input name={name} ref={combinedRef} {...registerProps} {...inputProps} />
        <div className={cn(styles.button, { [styles.disabled]: disabled })} onClick={() => { if(!disabled) setShowMenu(!showMenu) }}>
          <span className="u-text-ellipsis">{optionLabel === null || optionLabel === undefined ? <span className={styles.placeholder}>{placeholder}</span> : optionLabel}</span>
        </div>
        <div className={cn(styles.menu, { [styles.menuVisible]: showMenu})}>
          <ul>
            {children}
          </ul>
        </div>
      </div>
    </SelectContext.Provider>
  )
}

Select.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.object,
  className: PropTypes.string,
  inputProps: PropTypes.object,
  value: PropTypes.any,
  useDefault: PropTypes.bool
};

const Item = ({
  value,
  children,
  className,
  description,
}) => {

  const { setOption, searchQuery } = useSelectContext();

  const [filtered, setFiltered] = useState(false);

  const handleSelected = () => setOption(value);

  useEffect(() => {
    setFiltered(children.toString().toLowerCase().indexOf(searchQuery) < 0);
  }, [searchQuery])

  return (
    <li className={cn(styles.item, { [styles.itemHidden]: filtered, [className]: className })} onClick={handleSelected}>
      {children}
      {description &&
        <p className={styles.itemDescription}>{description}</p>
      }
    </li>
  )
}

Item.propTypes = {
  value: PropTypes.any,
  description: PropTypes.string
}

Select.Item = Item;
