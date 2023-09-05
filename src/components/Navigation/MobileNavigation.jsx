import React from 'react';
import {
  BurgerButton,
  LinkWrapper,
  PageLink,
  StyledNav,
  StyledNavWrapperMobile,
} from './StyledNavigation';
import SearchForm from 'components/Forms/SearchForm';

const MobileNavigation = ({ toggleBurgerMenu }) => {
  console.log(' toggleBurgerMenu: ', toggleBurgerMenu);

  return (
    <StyledNavWrapperMobile>
      <StyledNav>
        <BurgerButton   type="button" onClick={toggleBurgerMenu}>
          <svg>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#burger_icon`}
            />
          </svg>
        </BurgerButton>
        <LinkWrapper>
          <PageLink to={''}>
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-smileFace`}
              />
            </svg>
          </PageLink>
          <PageLink to={''}>
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-Heart`}
              />
            </svg>
          </PageLink>
          <PageLink to={''}>
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-sadFace`}
              />
            </svg>
          </PageLink>
        </LinkWrapper>
      </StyledNav>

      <SearchForm />
    </StyledNavWrapperMobile>
  );
};

export default MobileNavigation;
