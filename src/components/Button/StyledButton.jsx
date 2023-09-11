import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => {
    if (props.tag === 'smile') return props.theme.colors.colorGreen;
    if (props.tag === 'heart') return props.theme.colors.accentColor1;
    if (props.tag === 'sad') return props.theme.colors.colorYellow;
  }};
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

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

export const CloseButton = styled(StyledButton)`
  width: 60px;
  height: 60px;

  background: ${({ theme }) => theme.colors.colorWhite};
  border-radius: 20px;
  margin: 10px 10px 20px auto;
`;
export const SortButton = styled(StyledButton)`
  width: 40px;
  height: 40px;

  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  svg {
    width: 18px;
    height: 21px;
  }
`;
