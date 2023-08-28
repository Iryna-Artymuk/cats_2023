import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

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
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.content_background};
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

export const ButtonsWrapper = styled.div`
  border-radius: 20px;
  display: flex;
  width: 248px;
  overflow: hidden;
  gap: 4px;
`;

export const StyledNavigationWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
