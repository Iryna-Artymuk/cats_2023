import React from 'react';
import logo from '../../images/Logo.png';

import voting from '../../images/vote-table.png';
import breeds from '../../images/pet-breeds.png';
import gallery from '../../images/images-search.png';
import { useLocation } from 'react-router';
import { ROUTES } from 'utils/routes';
import {
  StyledBreedsCard,
  StyledGalleryCard,
  StyledGreeting,
  StyledLink,
  StyledList,
  StyledText,
  StyledVotingCard,
  StyledlogoWrapper,
  Stylednav,
  StylesWrapper,
} from './StyledNavigation';
const Navigation = () => {
  const location = useLocation();
  return (
    <StylesWrapper>
      <StyledlogoWrapper>
        <img src={logo} alt="logo" />
      </StyledlogoWrapper>
      <Stylednav>
        <span>hi!👋 </span>

        <StyledGreeting>Welcome to MacPaw Bootcamp2023</StyledGreeting>

        <StyledText>Lets start using The Cat API</StyledText>

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
    </StylesWrapper>
  );
};

export default Navigation;
