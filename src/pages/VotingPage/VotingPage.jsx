import {
  ButtonsWrapper,
  StyledActivityList,
  StyledImg,
  StyledLinkBackWrapper,
  StyledLogInfo,
  StyledTime,
} from './StyledVotingPage';

import catImg from '../../images/cat.png';
import defaultImg from '../../images/default.jpg';

import Button from 'components/Button/Button';

import PageLayout from '../PageLayout/PageLayout';
import LinkBack from 'components/LinkBack/LinkBack';
import { useLocation } from 'react-router';
import { useRef } from 'react';
import PageName from 'components/PageName/PageName';

const VotingPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <PageLayout pageName="Voting">
      <StyledLinkBackWrapper>
        <LinkBack backLinkHref={backLinkHref} />
        <PageName name="Voting" />
      </StyledLinkBackWrapper>

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
    </PageLayout>
  );
};

export default VotingPage;
