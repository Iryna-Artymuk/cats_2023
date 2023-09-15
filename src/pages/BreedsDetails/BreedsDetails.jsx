import PageLayout from 'pages/PageLayout/PageLayout';
import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import {
  StyledBreedInfoWrapper,
  StyledBreedName,
  StyledBreedsCount,
  StyledBreedsDetailCart,
  StyledImgWraper,
  StyledLinkBackWrapper,
  StyledPagitationWrapper,
} from './StyledBreedsDetails';
import LinkBack from 'components/LinkBack/LinkBack';
import PageName from 'components/PageName/PageName';

import breed1 from '../../images/breed1.png';
import breed2 from '../../images/breed2.png';
const data = [{ img: breed1, name: 'cat1' }, { img: breed2 }];
const BreedsDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [selectedBreedsIndex, setselectedBreeds] = useState(0);
  const handelClick = () => setselectedBreeds(selectedBreedsIndex);
  return (
    <PageLayout>
      <StyledLinkBackWrapper>
        <LinkBack backLinkHref={backLinkHref} />
        <PageName name="Breeds" />
        <StyledBreedsCount> 28</StyledBreedsCount>
      </StyledLinkBackWrapper>

      <StyledBreedsDetailCart>
        <StyledImgWraper>
          <img src={data[selectedBreedsIndex].img} alt="" />

          {/* <StyledPagitationWrapper>
            <span onClick={handelClick}></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </StyledPagitationWrapper> */}
        </StyledImgWraper>

        <StyledBreedName></StyledBreedName>
        <StyledBreedInfoWrapper>
          <p>Family companion cat</p>
          <p>
            Temperament: Affectionate, Energetic, Alert, Curious, Playful,
            Intelligent
          </p>
          <p>
            <span>Origin: </span>
            United States
          </p>
          <p>
            {' '}
            <span>Weight:</span>5 - 7 kgs
          </p>
          <p>
            <span>Life : </span>
            10 - 12 years
          </p>
        </StyledBreedInfoWrapper>
      </StyledBreedsDetailCart>
    </PageLayout>
  );
};

export default BreedsDetails;
