import { styled } from 'styled-components';

export const Container = styled.div`
  outline: 2px solid red;
  margin: 0 auto;
  padding: 10px;
  display: flex;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 767px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1420px;
  }
`;
