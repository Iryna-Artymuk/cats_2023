import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Box = styled.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 767px) {
    width: 708px;
  }
  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-left: 65px;
  }
`;

export const StyledNavigationWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const StyledContentWrapper = styled.div`
  width: 100%;

  padding: 20px;
  border-radius: 20px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.content_background};
  /* outline: 2px solid tomato; */
`;

export const StyledBackLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  /* outline: 2px solid yellowgreen; */
`;
export const StyledLinkBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accentColor2};
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledPageName = styled.div`
  width: 146px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.accentColor1};
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 2px;
  border-radius: 10px;
  text-align: center;

  text-transform: uppercase;
`;
