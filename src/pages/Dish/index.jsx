import { FiChevronLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Ingredient } from '../../components/Ingredient';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import ravanello300 from '../../assets/ravanello-300.png';
import ravanello400 from '../../assets/ravanello-400.png';
import receipt from '../../assets/icons/receipt.svg';

export function Dish() {
  return (
    <Container>
      <Header />

      <LinkText name="voltar" icon={FiChevronLeft} />

      <main>
        <Content>
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={ravanello300}
              type="image/png"
            />
            <img src={ravanello400} alt="" />
          </picture>

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

            <div>
              <Counter quantity="05" />
              <Button title="pedir ∙ R$ 25,00" icon={receipt} />
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
