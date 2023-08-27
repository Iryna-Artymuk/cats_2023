import React from 'react';
import {
  BurgerButton,
  LinkWrapper,
  PageLink,

  StyledNavWrapperTablet,
} from './StyledNavigation';
import SearchForm from 'components/Forms/SearchForm';

const TabletNavigation = () => {
  return (
    <StyledNavWrapperTablet>
      <BurgerButton>
        <svg>
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#burger_icon`} />
        </svg>
      </BurgerButton>
      <SearchForm />
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
    </StyledNavWrapperTablet>
  );
};

export default TabletNavigation;
