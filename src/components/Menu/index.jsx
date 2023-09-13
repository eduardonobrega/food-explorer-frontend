import { FiSearch } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'
import { useLocation } from 'react-router-dom'

import { LinkText } from '../LinkText'
import { Input } from '../Input'
import { Footer } from '../Footer'

import { Container } from './styles'

export function Menu({ show, onChange }) {
  const { user, signOut } = useAuth()

  const { pathname } = useLocation()

  function handleSignOut() {
    signOut()
  }

  return (
    <Container className={`menu ${show ? 'show' : ''}`}>
      <div className="menu-content">
        <div id="search">
          <FiSearch />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
            disabled={pathname !== '/'}
          />
        </div>

        <ul>
          {user.isAdmin && (
            <li>
              <LinkText name="Novo prato" to="/new" />
            </li>
          )}
          {!user.isAdmin && (
            <li>
              <LinkText name="Histórico de pedidos" to="/requests" />
            </li>
          )}
          {!user.isAdmin && (
            <li>
              <LinkText name="Meus favoritos" to="/favorites" />
            </li>
          )}

          <li>
            <LinkText name="Sair" to={'/'} onClick={handleSignOut} />
          </li>
        </ul>
      </div>
      <Footer />
    </Container>
  )
}
