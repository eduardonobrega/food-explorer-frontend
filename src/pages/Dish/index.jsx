import { FiChevronLeft } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';

import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Ingredient } from '../../components/Ingredient';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import ravanello from '../../assets/ravanello.png';

export function Dish() {
  const isAdmin = false;
  return (
    <Container>
      <Header />

      <LinkText name="voltar" icon={FiChevronLeft} to={-1} />

      <main>
        <Content isAdmin={isAdmin}>
          <img src={ravanello} alt="" />

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
              {!isAdmin && <Counter quantity="05" />}
              <Link to={isAdmin ? `/edit/1` : ''}>
                <Button
                  title={isAdmin ? 'Editar prato' : 'pedir ∙ R$ 25,00'}
                  icon={isAdmin ? undefined : IoReceiptOutline}
                />
              </Link>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
