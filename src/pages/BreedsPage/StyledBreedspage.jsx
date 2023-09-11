import styled from 'styled-components';

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
