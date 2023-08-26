import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Box, ButtonsWrapper } from './StyledVotingPage';
import SearchForm from 'components/Forms/SearchForm';
import Button from 'components/Button/Button';

const VotingPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <Box>
      <SearchForm></SearchForm>
      <div>
        <Link to={backLinkHref.current}>
          <span>
            <svg width={24} height={24}>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-back`}
              />
            </svg>
          </span>
        </Link>
        <div>voting</div>
        <div></div>
        <ButtonsWrapper>
          <Button type="button" tag="smile">
            {' '}
            <svg>
              <use
                xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-smileFace`}
              />
            </svg>
          </Button>
          <Button type="button" tag="heart">
            {' '}
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
      </div>
    </Box>
  );
};

export default VotingPage;
