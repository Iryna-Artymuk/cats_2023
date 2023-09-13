import { styled } from 'styled-components';

export const Box = styled.div`
  width: 100%;
  min-height: 800px;
  position: relative;
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 767px) {
    width: 708px;
    min-height: 1024px;
  }
  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-left: 65px;
  }
  outline: 2px solid green;
`;

export const StyledNavigationWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
export const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.content_background};
  outline: 2px solid tomato;
`;
