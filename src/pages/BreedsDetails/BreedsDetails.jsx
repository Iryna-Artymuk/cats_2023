import PageLayout from 'pages/PageLayout/PageLayout';
import React, { useRef } from 'react';
import { useLocation } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import {
  BreedsInfo,
  StyledBreedInfoWrapper,
  StyledBreedName,
  StyledBreedParametrs,
  StyledBreedStatus,
  StyledBreedTemperament,
  StyledBreedsCount,
  StyledBreedsDetailCart,
  StyledLinkBackWrapper,
} from './StyledBreedsDetails';
import LinkBack from 'components/LinkBack/LinkBack';
import PageName from 'components/PageName/PageName';

import breed1 from '../../images/breed1.png';
import breed2 from '../../images/breed2.png';
import breed3 from '../../images/breed3.png';
// import Swiper from 'components/Swiper/Swiper';
const data = [
  { img: breed1, name: 'cat1' },
  { img: breed2, name: 'cat2' },
  { img: breed3, name: 'cat3' },
  { img: breed1, name: 'cat1' },
  { img: breed2, name: 'cat2' },
  { img: breed3, name: 'cat3' },
  { img: breed1, name: 'cat1' },
  { img: breed2, name: 'cat2 ' },
  { img: breed3, name: 'cat3' },
];
const BreedsDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <PageLayout>
      <StyledLinkBackWrapper>
        <LinkBack backLinkHref={backLinkHref} />
        <PageName name="Breeds" />
        <StyledBreedsCount> 28</StyledBreedsCount>
      </StyledLinkBackWrapper>

      <StyledBreedsDetailCart>
        {/* <Swiper data={data} /> */}

        <Swiper
          effect="fade"
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            dynamicMainBullets: 5,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, EffectFade]}

          // className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide>
              <div className="imgWrapper">
                <img src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <StyledBreedInfoWrapper>
          <StyledBreedName>Basenji</StyledBreedName>
          <StyledBreedStatus>Family companion cat</StyledBreedStatus>
          <BreedsInfo>
            <StyledBreedTemperament>
              <span> Temperament:</span>
              <br />
              Affectionate, Energetic, Alert, Curious, Playful, Intelligent
            </StyledBreedTemperament>
            <StyledBreedParametrs>
              <p>
                <span>Origin: </span>
                United States
              </p>
              <p>
                <span>Weight:</span> 5 - 7 kgs
              </p>
              <p>
                <span>Life : </span>
                10 - 12 years
              </p>
            </StyledBreedParametrs>
          </BreedsInfo>
        </StyledBreedInfoWrapper>
      </StyledBreedsDetailCart>
    </PageLayout>
  );
};

export default BreedsDetails;
