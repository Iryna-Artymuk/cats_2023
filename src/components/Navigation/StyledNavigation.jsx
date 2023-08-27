import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StylesWrapper = styled.div`
  width: 100%;

  outline: 2px solid purple;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 0 175px 440px 147px;
  }

  @media screen and (min-width: 1440px) {
    width: 446px;
    margin: 0 72px 147px;
  }
`;

export const StyledlogoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 36px;
    margin-bottom: 86px;
  }
`;
export const Stylednav = styled.nav`
  width: 100%;

  /* outline: 2px solid green; */
  span {
    font-size: 44px;
    font-weight: 500;
    line-height: 1.3;
    color: #1d1d1d;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;
export const StyledGreeting = styled.p`
  margin-bottom: 60px;
  font-size: 20px;
`;
export const StyledText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #1d1d1d;
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 334px;
  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
  @media screen and (min-width: 769px) {
    padding-bottom: 310px;
  }
`;

export const StyledCard = styled.div`
  width: 138px;

  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const StyledVotingCard = styled(StyledCard)`
  background-color: ${({ theme }) => theme.colors.colorPurple};
`;
export const StyledBreedsCard = styled(StyledCard)`
  background-color: ${({ theme }) => theme.colors.colorGreen};
`;
export const StyledGalleryCard = styled(StyledCard)`
  background-color: ${({ theme }) => theme.colors.colorYellow};
`;
export const StyledLink = styled(NavLink)`
  width: 100%;

  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.buttonDefaultBGColor};
  color: ${({ theme }) => theme.colors.buttonDefaultColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBGColor};
    color: ${({ theme }) => theme.colors.buttonHoverColor};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.buttonActiveBGColor};
    color: ${({ theme }) => theme.colors.buttonActiveColor};
  }

  @media screen and (max-width: 768px) {
    width: 335px;
  }
`;

export const BurgerButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.colorWhite};
  border-radius: 20px;
  margin: 20px 0 0 20px;
  @media screen and (min-width: 1440px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  svg {
    fill: ${({ theme }) => theme.colors.colorWhite};
    display: block;
    width: 30px;
    height: 30px;
    stroke-width: 0;
  }
`;
export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;

  margin: 20px 20px 0px 0px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const PageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.buttonDefaultBGColor};
  color: ${({ theme }) => theme.colors.buttonDefaultColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverBGColor};
    color: ${({ theme }) => theme.colors.buttonHoverColor};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.buttonActiveBGColor};
    color: ${({ theme }) => theme.colors.buttonActiveColor};
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const StyledNavWrapperTablet = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;
export const StyledNavWrapperMobile = styled.div`
  display: block;
  width: 100%;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const StyledNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
