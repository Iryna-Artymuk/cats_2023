import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  outline: 2px solid yellowgreen;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;
export const StyledLinkBack = styled(Link)`
  display: inline-flex;
  margin-right: 10px;
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

export const StyledPageName = styled.span`
  width: 146px;
  height: 40px;
  display: inline-flex;
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
export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;
export const StyledLimitWrapper = styled.div`
  display: flex;

  gap: 10px;
`;
export const StyledBreedsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImgWraper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;

  &:hover .overlay {
    display: flex;
  }
  .overlay {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 10px;
    display: none;
    justify-content: center;
    align-items: flex-end;

    background: rgba(255, 134, 142, 0.6);

    p {
      width: 276px;
      height: 34px;
      text-align: center;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 10px;

      font-weight: 400;
      line-height: 1.5;
      background: ${({ theme }) => theme.colors.buttonDefaultBGColor};
      color: ${({ theme }) => theme.colors.accentColor1};

      @media screen and (min-width: 767px) {
        width: 180px;
      }
    }
  }
`;
