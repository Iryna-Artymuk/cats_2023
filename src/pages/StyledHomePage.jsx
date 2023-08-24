import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  width: 775px;
  height: 900px;
  padding: 30px 30px 30px 65px;
  outline: 2px solid blue;
`;
export const StyledContentWrapper = styled.div`
  width: 680px;
  height: 840px;
  background-color: ${({ theme }) => theme.colors.accentColor2};
  border-radius: 5px;
  outline: 2px solid green;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
