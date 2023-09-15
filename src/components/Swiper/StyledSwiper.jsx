import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiperWrapper = styled.div`
  position: relative;
  border-radius: 20px;

  width: 295px;
  height: 166px;
  border-radius: 20px;
  overflow: hidden;
  outline: 2px solid purple;
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  img {
    width: 295px;
    height: 166px;
  }
`;
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  outline: 2px solid purple;
`;
