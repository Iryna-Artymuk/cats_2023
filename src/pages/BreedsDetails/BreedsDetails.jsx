import PageLayout from 'pages/PageLayout/PageLayout';
import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import {
  StyledBreedInfoWrapper,
  StyledBreedName,
  StyledBreedParametrs,
  StyledBreedStatus,
  StyledBreedTemperament,
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
import breed3 from '../../images/cat.png';
import Swiper from 'components/Swiper/Swiper';
const data = [
  { img: breed1, name: 'cat1' },
  { img: breed2 },
  { img: breed3, name: 'cat3' },
];
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
        <Swiper data={data} />

        <StyledBreedInfoWrapper>
          <StyledBreedName>Basenji</StyledBreedName>
          <StyledBreedStatus>Family companion cat</StyledBreedStatus>
          <StyledBreedTemperament>
            <span> Temperament:</span> <br /> Affectionate, Energetic, Alert,
            Curious, Playful, Intelligent
          </StyledBreedTemperament>
          <StyledBreedParametrs>
            <p>
              <span>Origin: </span> <br />
              United States
            </p>
            <p>
              <span>Weight:</span> <br /> 5 - 7 kgs
            </p>
            <p>
              <span>Life : </span> <br />
              10 - 12 years
            </p>
          </StyledBreedParametrs>
        </StyledBreedInfoWrapper>
      </StyledBreedsDetailCart>
    </PageLayout>
  );
};

export default BreedsDetails;
