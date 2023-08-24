import { ChangeThemeButton } from 'components/Theme/TheamButton';
import React from 'react';

import logo from '../../images/Logo.png';
import greeting from '../../images/Hi.png';
import voting from '../../images/vote-table.png';
import breeds from '../../images/pet-breeds.png';
import gallery from '../../images/images-search.png';
import {
  Container,
  StyledBreedsCard,
  StyledGalleryCard,
  StyledLink,
  StyledList,
  StyledVotingCard,
  StyledlogoWrapper,
  Stylednav,
} from './StyledLayout';
import { useLocation } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const Layout = ({ children, handleThemeChange }) => {
  const location = useLocation();
  return (
    <Container>
      <ChangeThemeButton handleThemeChange={handleThemeChange} />

      <StyledlogoWrapper>
        <img src={logo} alt="logo" />
      </StyledlogoWrapper>
      <Stylednav>
        <img src={greeting} height={58} alt="" />

        <p>Welcome to MacPaw Bootcamp 2023</p>
        <p>Lets start using The Cat API</p>

        <StyledList>
          <li>
            <StyledVotingCard>
              <img src={voting} alt="" />
            </StyledVotingCard>
            <StyledLink state={{ from: location }} to={ROUTES.VOTING}>
              Voting
            </StyledLink>
          </li>
          <li>
            <StyledBreedsCard>
              <img src={breeds} alt="" />{' '}
            </StyledBreedsCard>
            <StyledLink state={{ from: location }} to={ROUTES.BREEDS}>
              Breeds
            </StyledLink>
          </li>
          <li>
            <StyledGalleryCard>
              <img src={gallery} alt="" />{' '}
            </StyledGalleryCard>
            <StyledLink state={{ from: location }} to={ROUTES.GALLERY}>
              Gallery
            </StyledLink>
          </li>
        </StyledList>
      </Stylednav>

      {children}
    </Container>
  );
};

export default Layout;
