import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { CustomStyles } from './SelectStyles';
import { useTheme } from 'styled-components';

const options = [
  { value: 'Limit 10', label: 'Limit 10' },
  { value: 'Limit 15', label: 'Limit 15' },
  { value: 'Limit 20', label: 'Limit 12' },
];

export default function SelectLimit() {
  const [selectedOption, setSelectedOption] = useState('Limit 10');
  const theme = useTheme();
  const style = {
    ...CustomStyles(),
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none',
      borderRadius: 10,
      background: `${theme.colors.background}`,

      width: 195,
      height: 40,
      fontSize: 16,
      lineHeight: 0.6,
      '@media only screen and (min-width: 768px)': {
        ...baseStyles['@media only screen and (min-width: 768x)'],
        width: 101,
      },
    }),
  };
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
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Limit 10"
        components={{ DropdownIndicator }}
        menuPlacement="bottom"
        menuPosition="fixed"
        styles={style}
      />
    </div>
  );
}
