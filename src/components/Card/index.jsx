import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import Edit from '../../assets/icons/pencil.svg';
import { Counter } from '../Counter';
import { Button } from '../Button';

import { Container } from './styles';

export function Card({ dish, favorite = false }) {
  const { user } = useAuth();

  return (
    <Container>
      {user.isAdmin ? (
        <button>
          <Link to="/edit/1">
            <img src={Edit} />
          </Link>
        </button>
      ) : (
        <button>
          <FiHeart className={favorite ? 'fav' : ''} />
        </button>
      )}

      <Link to="/dish/1">
        <img src={dish.image} alt={dish.name} />
        <h3>{dish.name} &gt;</h3>
        <p>{dish.description}</p>
        <span>R$ {dish.price}</span>
      </Link>
      {!user.isAdmin && (
        <div>
          <Counter />
          <Button title="incluir" />
        </div>
      )}
    </Container>
  );
}
