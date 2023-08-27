import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Box } from './StyledBreedspage';
import Button from 'components/Button/Button';
import { ButtonsWrapper, StyledNavigationWrapper } from './StyledVotingPage';
import Navigation from 'components/Navigation/Navigation';
import TabletNavigation from 'components/Navigation/Tabletavigation';
import MobileNavigation from 'components/Navigation/MobileNavigation';

const BreedsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <>
      <StyledNavigationWrapper>
        <Navigation />
      </StyledNavigationWrapper>

      <Box>
        <TabletNavigation />
        <MobileNavigation />

        <Link to={backLinkHref.current}>
          <span>
            <svg width={24} height={24}>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-back`}
              />
            </svg>
          </span>
        </Link>

        <ButtonsWrapper>
          <Button type="button" tag="smile">
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-smileFace`}
              />
            </svg>
          </Button>
          <Button type="button" tag="heart">
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-Heart`}
              />
            </svg>
          </Button>
          <Button type="button" tag="sad">
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-sadFace`}
              />
            </svg>
          </Button>
        </ButtonsWrapper>
      </Box>
    </>
  );
};

export default BreedsPage;
