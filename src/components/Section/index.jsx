import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import { Container } from './styles';

export function Section({ title, cards }) {
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        modules={[Navigation]}
        // navigation={true}
        spaceBetween={16}
        slidesPerView={'auto'}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={String(index)}>{card}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
