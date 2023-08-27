
import { styled } from 'styled-components';

export const Container = styled.div`
  outline: 2px solid red;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  @media screen and (min-width: 435px) {
    width: 415px;
  }

  @media screen and (min-width: 767px) {
    width: 788px;
  }
  @media screen and (min-width: 1440px) {
    width: 1420px;
  }
`;
