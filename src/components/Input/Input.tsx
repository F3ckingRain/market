import React, { FC, memo, useCallback, useState, ChangeEvent } from 'react';

import { debounce } from '@/utils/debounce';

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
}

const Input: FC<InputProps> = memo(({ value, label, onChange }) => {
  const [localValue, setLocalValue] = useState<string>(value);

  const changer = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLocalValue(e.target.value);
      onChange(e.target.value);
    },
    [onChange],
  );

  const changeHandler = debounce(changer, 1000);

  return (
    <div>
      {!!label && <label>{label}</label>}

      <input id={'input'} type={'text'} value={localValue} onInput={changeHandler} />
    </div>
  );
});
export default Input;
