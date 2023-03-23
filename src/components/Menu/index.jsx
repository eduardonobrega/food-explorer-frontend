import { FiSearch } from 'react-icons/fi';

import { LinkText } from '../LinkText';
import { Input } from '../Input';
import { Footer } from '../Footer';

import { Container } from './styles';

export function Menu({ show }) {
  const isAdmin = false;

  return (
    <Container className={`menu ${show ? 'show' : ''}`}>
      <div className="menu-content">
        <div id="search">
          <FiSearch />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <ul>
          {isAdmin && (
            <li>
              <LinkText name="Novo prato" to="/new" />
            </li>
          )}
          {!isAdmin && (
            <li>
              <LinkText name="Histórico de pedidos" to="/requests" />
            </li>
          )}
          {!isAdmin && (
            <li>
              <LinkText name="Meus favoritos" to="/favorites" />
            </li>
          )}

          <li>
            <LinkText name="Sair" />
          </li>
        </ul>
      </div>
      <Footer />
    </Container>
  );
}
