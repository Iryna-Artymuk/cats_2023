import { ChangeThemeButton } from 'components/Theme/TheamButton';
import React from 'react';

import { Container } from './StyledLayout';

import AppRoutes from 'components/Routes/Routes';

const Layout = ({ children, handleThemeChange }) => {
  return (
    <Container>
      <ChangeThemeButton handleThemeChange={handleThemeChange} />

      <AppRoutes />
    </Container>
  );
};

export default Layout;
