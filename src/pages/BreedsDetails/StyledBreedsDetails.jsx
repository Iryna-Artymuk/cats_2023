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
export const StyledPagitationWrapper = styled.div`
  height: 30px;
  position: absolute;
  bottom: -15px;
  left: 103px;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: ${({ theme }) => theme.colors.content_background};
  border-radius: 20px;
  padding: 10px;
  span {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accentColor1};
  }
`;
export const StyledBreedInfoWrapper = styled.div`
  position: relative;
  width: 295px;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.accentColor2};
`;

export const StyledBreedName = styled.span`
  position: absolute;
  top: -31px;
  left: 96px;
  z-index: 10;

  display: inline-block;
  padding: 17px 20px 17px 20px;
  text-align: center;

  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textDark};
  background: ${({ theme }) => theme.colors.content_background};

  border-radius: 20px;
`;

export const StyledBreedStatus = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin-top: 19px;
  margin-bottom: 20px;
`;
export const StyledBreedTemperament = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textDark};
  }
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
`;
