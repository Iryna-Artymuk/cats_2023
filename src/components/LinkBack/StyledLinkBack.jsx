import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLinkBack = styled(Link)`
  display: inline-flex;

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
