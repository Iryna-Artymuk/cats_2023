import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const SerchFormWrapper = styled.div`
  display: flex;
  gap: 10px;

  /* outline: 2px solid green; */
`;
export const StyledForm = styled.form`
  width: 100%;
  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 767px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1420px;
  }
  height: 60px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.colorWhite};
  @media screen and (min-width: 767px) {
    width: 428px;
  }
  @media screen and (min-width: 1439px) {
    width: 470px;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 15px 0 15px 20px;
    border-radius: 20px;
  }
  input::placeholder {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 20px;
  }
  button {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 10px;
    background: ${({ theme }) => theme.colors.buttonHoverBGColor};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledLink = styled(Link)`
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
