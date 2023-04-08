import { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { IoReceiptOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { LinkText } from '../../components/LinkText';
import { Ingredient } from '../../components/Ingredient';
import { Counter } from '../../components/Counter';
import { Button } from '../../components/Button';

import photoPlaceholder from '../../assets/photoPlaceholder.png';

export function Dish() {
  const [dish, setDish] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();
  const { id } = useParams();

  const photoUrl = dish.photo
    ? `${api.defaults.baseURL}/files/${dish.photo}`
    : photoPlaceholder;

  async function handleRequest() {
    await api.post('/requests', { quantity, dish_id: dish.id });
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`);

      setDish(response.data);
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      <div className="wrapper">
        <LinkText name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Content
          isAdmin={user.isAdmin}
          Numberingredients={dish.ingredients?.length}
        >
          <img src={photoUrl} alt="" />
          <div>
            <h2>{dish.name}</h2>
            <p>{dish.description ? dish.description : ''}</p>

            <ul>
              {dish.ingredients &&
                dish.ingredients.map((ingredient) => (
                  <Ingredient
                    key={String(ingredient.id)}
                    name={ingredient.name}
                  />
                ))}
            </ul>

            <div>
              {!user.isAdmin && (
                <Counter quantity={quantity} setQuantity={setQuantity} />
              )}
              <Link to={user.isAdmin ? `/edit/${dish.id}` : ''}>
                <Button
                  onClick={user.isAdmin ? () => {} : handleRequest}
                  title={
                    user.isAdmin
                      ? 'Editar prato'
                      : `pedir ∙ ${(dish.price * quantity).toLocaleString(
                          'pt-BR',
                          {
                            style: 'currency',
                            currency: 'BRL',
                          }
                        )}`
                  }
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
