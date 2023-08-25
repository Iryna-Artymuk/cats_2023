import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1420px;

  /* width: 1200px; */
  /* не задаємо фіксовану ширину щоб контейнер був гумовим  */
  margin: auto;
  padding: 10px;
  outline: 2px solid red;
`;
export const StyledContentWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
export const StylesWrapper = styled.div`
  margin: 0 72px 0 14git 7px;
  outline: 2px solid red;
  @media screen and (max-width: 768px) {
    margin: 0 32px 0 50px;
  }
`;
export const Stylednav = styled.nav`
  max-width: 450px;
  min-height: 450px;

  /* outline: 2px solid green; */
  span {
    font-size: 44px;
    font-weight: 500;
    line-height: 1.3;
    color: #1d1d1d;
    text-transform: uppercase;
  }
`;
export const StyledlogoWrapper = styled.div`
  height: 18px;
  margin-top: 36px;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
export const StyledGreeting = styled.p`
  margin-bottom: 60px;
  margin-top: 10px;
  font-size: 20px;
`;
export const StyledText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #1d1d1d;
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  li {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const StyledCard = styled.div`
  width: 138px;
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
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
  width: 138px;
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
`;
