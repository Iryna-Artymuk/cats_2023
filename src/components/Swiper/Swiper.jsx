// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import {
  StyledSwiper,
  StyledSwiperSlide,
  StyledSwiperWrapper,
} from './StyledSwiper';

const BreedsSwiper = function ({ data }) {
  return (
    <StyledSwiperWrapper>
      <StyledSwiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {data.map(item => (
          <StyledSwiperSlide>
            <img src={item.img} alt="" />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </StyledSwiperWrapper>
  );
};

export default BreedsSwiper;
