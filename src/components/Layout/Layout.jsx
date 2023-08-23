import { ChangeThemeButton } from 'components/Theme/TheamButton';
import React from 'react';
import { Container, Stylednav } from './StyledLayout';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const Layout = ({ children, handleThemeChange }) => {
  const location = useLocation();
  return (
    <Container>
      <ChangeThemeButton handleThemeChange={handleThemeChange} />

      <Stylednav>
        <Link state={{ from: location }} to={ROUTES.VOTING}>
          VOTING
        </Link>

        <Link state={{ from: location }} to={ROUTES.BREEDS}>
          BREEDS
        </Link>

        <Link state={{ from: location }} to={ROUTES.GALLERY}>
          GALLERY
        </Link>
      </Stylednav>
      {children}
    </Container>
  );
};

export default Layout;
