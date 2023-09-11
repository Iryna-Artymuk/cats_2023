import { useTheme } from 'styled-components';

export const CustomStyles = selectType => {
  const theme = useTheme();
  return {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none',
      borderRadius: 10,
      background: `${theme.colors.background}`,

      width: 295,
      height: 40,
      fontSize: 16,
      lineHeight: 0.6,
      '@media only screen and (min-width: 768px)': {
        ...baseStyles['@media only screen and (min-width: 768 px)'],
        width: 226,
      },
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: base => ({
      ...base,

      height: 40,
      padding: '14px 14px 10px 0',
    }),

    singleValue: base => ({
      ...base,
      color: `${theme.colors.textColor}`,
      padding: '8px 0 8px 10px',
    }),
    input: base => ({
      ...base,

      padding: 0,
      margin: 0,
    }),
  };
};
