import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Box = styled.div`
  width: 100%;
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

export const StyledContentWrapper = styled.div`
  width: 100%;

  padding: 20px;
  border-radius: 20px;
  margin-top: 10px;
  background: ${({ theme }) => theme.colors.content_background};
  /* outline: 2px solid tomato; */
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

export const StyledNavigationWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
export const StyledBackLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  /* outline: 2px solid yellowgreen; */
`;

export const StyledImg = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 295px;
  }

  @media screen and (min-width: 767px) {
    width: 668px;
  }
  @media screen and (min-width: 1440px) {
    width: 640px;
  }

  border-radius: 20px;
  margin-bottom: 43px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  left: 55px;

  border-radius: 20px;
  display: flex;

  overflow: hidden;
  gap: 4px;
  margin-bottom: 14px;
  @media screen and (min-width: 767px) {
    left: 196px;
    bottom: -40px;
  }
`;

export const StyledActivityList = styled.ul`
  background: ${({ theme }) => theme.colors.background};

  li {
    width: 100%;
    div {
      position: relative;

      width: 100%;

      padding: 18px 15px 15px 15px;
      border-radius: 10px;
      background: ${({ theme }) => theme.colors.background};

      @media screen and (min-width: 767px) {
        display: flex;
        gap: 13px;
      }
      svg {
        position: absolute;
        top: 21px;
        right: 21px;
      }
    }
  }
`;

export const StyledTime = styled.span`
  display: inline-block;
  padding: 3px 10px 3px 10px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;

  border-radius: 5px;
  margin-bottom: 10px;
  @media screen and (min-width: 767px) {
    margin-bottom: 0px;
  }
`;

export const StyledLogInfo = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  p {
    color: ${({ theme }) => theme.colors.textColor};
  }

  span {
    color: ${({ theme }) => theme.colors.textDark};
  }
`;
