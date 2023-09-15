import React from 'react';
import { StyledLinkBack } from './StyledLinkBack';

const LinkBack = ({ backLinkHref }) => {
  return (
    <StyledLinkBack title="Go back" to={backLinkHref.current}>
      <svg width={24} height={24}>
        <use
          xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-back`}
        />
      </svg>
    </StyledLinkBack>
  );
};

export default LinkBack;
