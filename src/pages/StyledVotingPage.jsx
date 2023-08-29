import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import defaultImg from '../images/default.jpg';
export const Box = styled.div`
  width: 100%;

  outline: 2px solid blue;
  @media screen and (min-width: 1440px) {
    margin-left: 4.51%;
    width: 47.22%;
  }
`;

export const StyledContentWrapper = styled.div`
  width: 335px;
  margin: 10px 20px 20px 20px;
  padding: 20px;
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.content_background};
  outline: 2px solid tomato;
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
  outline: 2px solid yellowgreen;
`;

export const StyledImg = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.catImg || defaultImg})`,
    backgroundSize: 'cover',
  },
}))`
  position: relative;
  width: 295px;
  height: 166px;
  border-radius: 20px;
  margin-bottom: 43px;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  left: 55px;
  right: 54px;

  border-radius: 20px;
  display: flex;

  overflow: hidden;
  gap: 4px;
`;

export const StyledActivityList = styled.ul`
  background: ${({ theme }) => theme.colors.background};

  li {
    width: 100%;
    div {
      width: 100%;
      height: 118px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 18px 15px 15px 15px;
      border-radius: 20px;
      background: ${({ theme }) => theme.colors.background};
    }
  }
`;
