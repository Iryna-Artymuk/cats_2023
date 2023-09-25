import styled from 'styled-components';

export const StyledLinkBackWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledBreedsCount = styled.span`
  width: 90px;
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

export const StyledBreedsDetailCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  /* outline: 2px solid blue; */
`;

export const StyledBreedInfoWrapper = styled.div`
  position: relative;
  width: 295px;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.accentColor2};

  @media screen and (min-width: 768px) {
    width: 640px;
    height: 204px;
  }
`;

export const StyledBreedName = styled.span`
  position: absolute;
  top: -40px;
  left: 96px;
  z-index: 10;
  padding: 16px 20px;
  display: inline-block;

  text-align: center;

  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  background: ${({ theme }) => theme.colors.content_background};

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 5px 40px;
    left: 223px;
    font-size: 36px;
  }
`;

export const StyledBreedStatus = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BreedsInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 100%;

    flex-direction: row;
    gap: 20px;
    justify-content: center;

    /* outline: 1px solid red; */
  }
`;
export const StyledBreedTemperament = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textDark};
  }

  @media screen and (min-width: 768px) {
    width: 270px;
    margin-bottom: 0px;
  }

  /* outline: 1px solid green; */
`;
export const StyledBreedParametrs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-weight: 400;
    font-size: 16px;
  }
  p span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textDark};
  }

  @media screen and (min-width: 768px) {
    width: 270px;
  }

  /* outline: 1px solid green; */
`;
