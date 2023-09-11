
import { styled } from 'styled-components';



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
