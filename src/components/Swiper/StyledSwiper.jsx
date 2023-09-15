import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiperWrapper = styled.div`
  position: relative;
  border-radius: 20px;

  width: 295px;
  height: 166px;
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  img {
    position: relative;
    width: 295px;
    height: 166px;
    border-radius: 20px;
    cursor: pointer;
  }
`;
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: visible;
`;
