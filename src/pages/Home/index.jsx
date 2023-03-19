import { Container, Banner } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import foots100 from '../../assets/foots-100.svg';
import foots200 from '../../assets/foots-200.svg';

import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      <Header />
      <Banner>
        <picture>
          <source media="(max-width: 640px)" srcSet={foots100} />
          <img src={foots200} alt="" />
        </picture>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>
      <main>
        <Section
          title="Pratos principais"
          cards={[
            <Card
              dish={{
                image: 'https://github.com/eduardonobrega.png',
                name: 'Torradas de Parma',
                description:
                  'Presunto de parma e rúcula em  um pão com fermentação natural.',
                price: '25,97',
              }}
            />,
            <Card
              dish={{
                image: 'https://github.com/eduardonobrega.png',
                name: 'Torradas de Parma',
                description:
                  'Presunto de parma e rúcula em  um pão com fermentação natural.',
                price: '25,97',
              }}
            />,
            <Card
              dish={{
                image: 'https://github.com/eduardonobrega.png',
                name: 'Torradas de Parma',
                description:
                  'Presunto de parma e rúcula em  um pão com fermentação natural.',
                price: '25,97',
              }}
            />,
            <Card
              dish={{
                image: 'https://github.com/eduardonobrega.png',
                name: 'Torradas de Parma',
                description:
                  'Presunto de parma e rúcula em  um pão com fermentação natural.',
                price: '25,97',
              }}
            />,
          ]}
        ></Section>
      </main>
      <Footer />
    </Container>
  );
}
