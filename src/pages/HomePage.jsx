import React from 'react';
import homePageImg from '../images/girl-and-pet 1.png';
import { StyledContentWrapper, StyledWrapper } from 'pages/StyledHomePage';



import Navigation from 'components/Navigation/Navigation';
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
