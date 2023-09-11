import React from 'react';
import homePageImg from '../../images/girl-and-pet 1.png';
import Navigation from 'components/Navigation/Navigation';
import { StyledContentWrapper, StyledWrapper } from './StyledHomePage';

const HomePage = () => {

  return (
    <>
   <Navigation/>
      <StyledWrapper>
        <StyledContentWrapper>
          <img src={homePageImg} alt="" />
        </StyledContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default HomePage;
