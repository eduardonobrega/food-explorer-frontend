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
`;
