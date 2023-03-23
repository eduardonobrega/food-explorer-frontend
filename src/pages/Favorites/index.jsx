import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { DishItem } from '../../components/DishItem';

import { Container, Content } from './styles';
import ravanello from '../../assets/ravanello.png';


export function Favorites() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <h1>Meus favoritos</h1>

          <ul>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            <li>
              <DishItem
                img={ravanello}
                name={`Salada Radish`}
                btnTitle="Remover dos Favoritos"
              />
            </li>
            
          </ul>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
