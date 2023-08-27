import { styled } from 'styled-components';

export const StyledContentWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
  width: 87.74%;
  height: 93.33%;
  background-color: ${({ theme }) => theme.colors.accentColor2};
  border-radius: 5px;
  margin: 30px 30px 30px 65px;
  /* outline: 2px solid green; */

  img {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 53.81%;
  }

  outline: 2px solid blue;
`;
