import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Box,
  ButtonsWrapper,
  StyledActivityList,
  StyledBackLinkWrapper,
  StyledContentWrapper,
  StyledImg,
  StyledLinkBack,
  StyledLogInfo,
  StyledNavigationWrapper,
  StyledPageName,
  StyledTime,
} from './StyledVotingPage';

import catImg from '../images/cat.png';
import defaultImg from '../images/default.jpg';

import Button from 'components/Button/Button';
import Navigation from 'components/Navigation/Navigation';
import TabletNavigation from 'components/Navigation/Tabletavigation';
import MobileNavigation from 'components/Navigation/MobileNavigation';

const VotingPage = () => {
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

        <StyledContentWrapper>
          <StyledBackLinkWrapper>
            <StyledLinkBack to={backLinkHref.current}>
              <span>
                <svg width={24} height={24}>
                  <use
                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-back`}
                  />
                </svg>
              </span>
            </StyledLinkBack>

            <StyledPageName>Voting</StyledPageName>
          </StyledBackLinkWrapper>
          <StyledImg>
            <img src={catImg || defaultImg} alt="" />
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
          </StyledImg>

          <StyledActivityList>
            <li>
              <div>
                <StyledTime>22:35</StyledTime>

                <svg width={24} height={24}>
                  <use
                    xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-Heart`}
                  />
                </svg>

                <StyledLogInfo>
                  Image ID: <span> fQSunHvl8</span> was added to Likes
                </StyledLogInfo>
              </div>
            </li>
          </StyledActivityList>
        </StyledContentWrapper>
      </Box>
    </>
  );
};

export default VotingPage;
