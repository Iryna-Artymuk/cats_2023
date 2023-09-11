import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { CustomStyles } from './SelectStyles';

const options = [
  { value: 'AllBreeds', label: 'AllBreeds' },
  { value: 'oneBreed', label: 'oneBreed' },
  { value: 'secondBreed', label: 'secondBreed' },
];

export default function SelectBreeds() {
  console.log('components : ', components);
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <svg width={12} height={12}>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-drop_down`}
          />
        </svg>
      </components.DropdownIndicator>
    );
  };
  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      placeholder="All breeds"
      components={{ DropdownIndicator }}
      menuPlacement="bottom"
      menuPosition="fixed"
      styles={CustomStyles()}
    />
  );
}
