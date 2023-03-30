import { FiChevronLeft } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Ingredient } from '../../components/Ingredient';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import ravanello from '../../assets/ravanello.png';

export function Dish() {
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <div className="wrapper">
        <LinkText name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Content isAdmin={user.isAdmin}>
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
              {!user.isAdmin && <Counter quantity="05" />}
              <Link to={user.isAdmin ? `/edit/1` : ''}>
                <Button
                  title={user.isAdmin ? 'Editar prato' : 'pedir ∙ R$ 25,00'}
                  icon={user.isAdmin ? undefined : IoReceiptOutline}
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
