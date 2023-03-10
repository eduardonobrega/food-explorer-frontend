import { Container } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Header />
      <main>
      <img src="" alt="" />
        <Card
          dish={{
            image: 'https://github.com/eduardonobrega.png',
            name: 'Torradas de Parma',
            description:
              'Presunto de parma e rúcula em  um pão com fermentação natural.',
            price: '25,97',
            
          }}
        />
      </main>
      <Footer />
    </Container>
  );
}