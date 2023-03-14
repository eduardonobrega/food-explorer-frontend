import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  > header {
    position: sticky;
    z-index: 2;
    top: 0;
  }
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';

  grid-template-rows: 11.4rem auto 7.7rem;

  > main {
    grid-area: main;
    width: min(89%, 1122px);
    margin: 0 auto;
    padding: 4.4rem 0 2.5rem;

    > div:first-child {
      background: ${({ theme }) => theme.GRADIENTS[200]};

      height: 12rem;
      border-radius: 3px;

      display: flex;
      justify-content: flex-end;

      position: relative;
      > picture {
        position: absolute;
        top: -3rem;
        left: -3rem;
        bottom: 0;
      }
      > picture > img {
      }

      padding-right: clamp(0rem, -5.5556rem + 13.8889vw, 10rem);
      > div {
        font-family: 'Poppins', sans-serif;
        width: 21.5rem;
        padding-top: 3.6rem;

        > h2 {
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 2.5rem;
          margin-bottom: 3px;
        }

        > p {
          font-size: 1.2rem;
          line-height: 1.7rem;
        }
      }
    }
  }

  @media (max-width: 399px) {
    > main > div:first-child {
      justify-content: center;
      align-items: center;

      > picture > img {
        display: none;
      }
      > div {
        padding-top: 0;
      }
    }
  }
  @media (min-width: 641px) {
    grid-template-rows: 9.3rem auto 7.7rem;

    > main {
      padding-top: clamp(6rem, -7.8595rem + 21.6216vw, 16.4rem);

      > div:first-child {
        height: 26rem;
        justify-content: space-between;
        > picture {
          position: static;
          overflow: hidden;
          margin-top: -13%;
          margin-left: -5%;
          width: 58%;
        }
        > div {
          width: 50%;
          padding-top: 8.8rem;
          > h2 {
            font-size: clamp(1.8rem, -1.1318rem + 4.5738vw, 4rem);
            margin-bottom: clamp(0.3rem, -0.3663rem + 1.0395vw, 0.8rem);
            line-height: clamp(2.5rem, -1.6312rem + 6.4449vw, 5.6rem);
          }

          > p {
            font-size: clamp(1.2rem, 0.6669rem + 0.8316vw, 1.6rem);
            line-height: 1.7rem;
          }
        }
      }
    }
  }
`;
