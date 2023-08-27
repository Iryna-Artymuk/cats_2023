import { styled } from 'styled-components';

export const Box = styled.div`
  width: 100%;

  outline: 2px solid blue;
  @media screen and (min-width: 1440px) {
    margin-left: 4.51%;
    width: 47.22%;
  }
`;




export const ButtonsWrapper = styled.div`
  border-radius: 20px;
  display: flex;
  width: 248px;
  overflow: hidden;
  gap: 4px;
`;

export const StyledNavigationWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
