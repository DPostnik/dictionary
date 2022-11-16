import { useRef } from 'react';

import classes from './text-field.module.scss';

type TextFieldProps = {
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  label?: string;
  name: string;
};

export default function TextField({
  value,
  onChange,
  name,
  label,
  placeholder,
}: TextFieldProps) {
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = () => {
    if (ref.current) {
      onChange(name, ref.current.value);
    }
  };

  return (
    <div className={classes['text-field__wrapper']}>
      {label && <label className={classes['text-field__label']}>{label}</label>}
      <input
        className={classes['text-field__input']}
        ref={ref}
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
}
