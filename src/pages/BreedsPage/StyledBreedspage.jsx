import styled from 'styled-components';

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;
