import React from 'react';
import useToggle from 'Hooks/useToggle';

import { Select, ChevronIcon, Option } from './FilterSelect.styles';

function FilterSelect({ value, options, setValue }) {
  const [showOptions, toggleOptions] = useToggle(false);

  const handleClick = opt => {
    if (value.includes(opt)) {
      setValue(value.filter(v => v !== opt));
    } else {
      setValue([...value, opt]);
    }
  };

  return (
    <Select>
      <Select.Placeholder onClick={toggleOptions}>
        <span>Filter By Region</span>
        <ChevronIcon />
      </Select.Placeholder>
      <Select.Options hidden={!showOptions}>
        {options.map(opt => (
          <Option
            key={opt}
            selected={value.includes(opt)}
            onClick={() => handleClick(opt)}
          >
            {opt}
          </Option>
        ))}
      </Select.Options>
    </Select>
  );
}

FilterSelect.defaulProps = {
  value: [],
  options: [],
  setValue: () => {},
};

export default FilterSelect;
