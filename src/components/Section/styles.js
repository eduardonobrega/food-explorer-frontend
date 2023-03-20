import styled from 'styled-components';

export const Container = styled.section`
  /* width: min(100vw, 1122px); */

  max-width: 94.5vw;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-bottom: 2.4rem;
  }

  .swiper {
    /* background-color: red; */
  }

  .swiper-wrapper {
    /* background-color: blue; */
    justify-content: start;
    align-items: center;
  }
  .swiper-slide {
    /* background-color: yellow; */
    width: fit-content;
  }

  @media (max-width: 640px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
  @media (min-width: 641px) {
    width: min(95%, 1122px);
    margin: 0 auto;

    > h2 {
      font-size: clamp(2.4rem, 1.3294rem + 1.6701vw, 3.2rem);
      line-height: clamp(2.5rem, -0.1764rem + 4.1754vw, 4.5rem);
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-weight: 700;
      font-size: 3rem;
      color: ${({ theme }) => theme.LIGHT[100]};
    }
  }
`;
