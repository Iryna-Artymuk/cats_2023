import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1420px;

  /* width: 1200px; */
  /* не задаємо фіксовану ширину щоб контейнер був гумовим  */
  margin: auto;
  padding: 10px;
  /* outline: 2px solid red; */
`;
export const StyledContentWrapper = styled.div`
  display: flex;

  gap: 72px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
export const StylesWrapper = styled.div`
  width: 486px;
  margin: 0 0 0 67px;

  @media screen and (max-width: 768px) {
    margin: 0 5px 0 10px;
  }
`;
export const Stylednav = styled.nav`
  width: 100%;
  min-height: 450px;

  /* outline: 2px solid green; */
  span {
    font-size: 44px;
    font-weight: 500;
    line-height: 1.3;
    color: #1d1d1d;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
`;
export const StyledlogoWrapper = styled.div`
  height: 18px;
  margin-top: 36px;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;
export const StyledGreeting = styled.p`
  margin-bottom: 60px;
  margin-top: 10px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;
export const StyledText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #1d1d1d;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  li {
    width: 28.39%;
    @media screen and (max-width: 768px) {
      width: 100px;
    }

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const StyledCard = styled.div`
  width: 100%;
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
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100px;
  }

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
