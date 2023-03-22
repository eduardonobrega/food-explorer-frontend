import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DishItem } from '../../components/DishItem';
import { Button } from '../../components/Button';
import { PaymentItem } from '../../components/PaymentItem';

import { Container, Content } from './styles';
import ravanello from '../../assets/ravanello.png';

export function Payment() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <section id="order">
            <h1>Meu pedido</h1>
            <ul>
              <li>
                <DishItem
                  img={ravanello}
                  quantity={1}
                  name={`Salada Radish`}
                  amount={25.97}
                  btnTitle="Excluir"
                />
              </li>
              <li>
                <DishItem
                  img={ravanello}
                  quantity={1}
                  name={`Salada Radish`}
                  amount={25.97}
                  btnTitle="Excluir"
                />
              </li>
              <li>
                <DishItem
                  img={ravanello}
                  quantity={1}
                  name={`Salada Radish`}
                  amount={25.97}
                  btnTitle="Excluir"
                />
              </li>
              <li>
                <DishItem
                  img={ravanello}
                  quantity={1}
                  name={`Salada Radish`}
                  amount={25.97}
                  btnTitle="Excluir"
                />
              </li>
            </ul>

            <p>Total: R$ 103,88</p>
          </section>

          <Link to="/payment-only">
            <Button title="Avançar" />
          </Link>
          
          <section id='payment'>
            <h1>Pagamento</h1>
            <PaymentItem/>
          </section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
