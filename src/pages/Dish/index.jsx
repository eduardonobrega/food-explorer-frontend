import { FiChevronLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Ingredient } from '../../components/Ingredient';
import { Counter } from '../../components/Counter';

import ravanello300 from '../../assets/ravanello-300.png';
import ravanello400 from '../../assets/ravanello-400.png';

export function Dish() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <LinkText name="Voltar" icon={FiChevronLeft} />
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet={ravanello300}
                type="image/png"
              />
              <img src={ravanello400} alt="" />
            </picture>
          </div>

          <div>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <ul>
              <Ingredient name="alface" />
              <Ingredient name="cebola" />
              <Ingredient name="pã o naan" />
              <Ingredient name="pepino" />
              <Ingredient name="rabanete" />
              <Ingredient name="tomate" />
            </ul>

            <Counter quantity="05" />
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
