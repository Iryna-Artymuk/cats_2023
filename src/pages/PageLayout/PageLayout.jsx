import { useLocation } from 'react-router';
import {  useState } from 'react';

import { ROUTES } from 'utils/routes';

import TabletNavigation from 'components/Navigation/Tabletavigation';
import MobileNavigation from 'components/Navigation/MobileNavigation';
import { CloseButton } from 'components/Button/StyledButton';

import Navigation from 'components/Navigation/Navigation';
import {
  Box,
  StyledContentWrapper,
  StyledNavigationWrapper,

} from './StyledPageLayout';
import { StyledBreedsCard, StyledBurgerMenu, StyledGalleryCard, StyledLink, StyledNavList, StyledVotingCard } from 'components/Navigation/StyledNavigation';


import voting from '../../images/vote-table.png';
import breeds from '../../images/pet-breeds.png';
import gallery from '../../images/images-search.png';

const PageLayout = ({ children, pageName }) => {
  const location = useLocation();
 
  const [showBurgerMenu, SetShowMenu] = useState(false);


  const toggleBurgerMenu = () => SetShowMenu(!showBurgerMenu);
  return (
    <>
      <StyledNavigationWrapper>
        <Navigation />
      </StyledNavigationWrapper>

      <Box>
      <TabletNavigation toggleBurgerMenu={toggleBurgerMenu} />
        <MobileNavigation toggleBurgerMenu={toggleBurgerMenu} />
        {showBurgerMenu && (
          <StyledBurgerMenu>
            <CloseButton type="button" onClick={toggleBurgerMenu}>
              <svg>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close_icon`}
                />
              </svg>
            </CloseButton>
            <StyledNavList>
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
            </StyledNavList>
          </StyledBurgerMenu>
        )}
        <StyledContentWrapper>
        
          {children}
        </StyledContentWrapper>
      </Box>
    </>
  );
};

export default PageLayout;
