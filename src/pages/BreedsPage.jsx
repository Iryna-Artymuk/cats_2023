import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledWrapper } from './StyledHomePage';

const BreedsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <>
    <StyledWrapper>
      <div>
        <Link to={backLinkHref.current}>
          <span>
            <svg width={24} height={24}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#arrow`} />
            </svg>
          </span>
        </Link>
      </div>
      <div>Breeds</div>
    </StyledWrapper>
  </>
  );
};

export default BreedsPage;
