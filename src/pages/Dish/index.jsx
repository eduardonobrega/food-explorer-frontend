import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Ingredient } from '../../components/Ingredient';

import caretLeft from '../../assets/icons/caretLeft.svg';
import ravanello300 from '../../assets/ravanello-300.png';
import ravanello400 from '../../assets/ravanello-400.png';

export function Dish() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <LinkText name="Voltar" icon={caretLeft} />
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
              <Ingredient name='alface' />
            </ul>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
