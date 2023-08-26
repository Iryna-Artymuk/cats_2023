import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => {
    if (props.tag === 'smile') return props.theme.colors.colorGreen;
    if (props.tag === 'heart') return props.theme.colors.accentColor1;
    if (props.tag === 'sad') return props.theme.colors.colorYellow;
  }};
  svg {
    fill: ${({ theme }) => theme.colors.colorWhite};
    display: block;
    width: 30px;
    height: 30px;
    stroke-width: 0;
  }
  /* 
  &:hover {
    color: ${({ theme }) => theme.colors.hoverTextColor};
  } */
`;
