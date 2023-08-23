import React from 'react';
import homePageImg from '../images/girl-and-pet 1.png';
import { StyledContentWrapper, StyledWrapper } from 'pages/StyledHomePage';

const HomePage = () => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <img src={homePageImg} alt="" />
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default HomePage;
