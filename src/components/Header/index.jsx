import { FiLogOut, FiShoppingCart } from 'react-icons/fi'
import { IoReceiptOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Button } from '../Button'

import menu from '../../assets/icons/menu.svg'
// import close from '../../assets/icons/close.svg'
import explorer from '../../assets/icons/explorer.svg'

import { Container } from './styles'
import { LinkText } from '../LinkText'
import { Search } from './components/Search'

export function Header({ onSetSearch }) {
  const navigate = useNavigate()
  const { user, signOut, userRequests, userPurchases } = useAuth()

  const purchasesPending = userPurchases.filter(
    (purchase) => purchase.status === 'pending',
  )

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  return (
    <Container isAdmin={user.isAdmin}>
      <header>
        <button id="menuBurgue">
          <img src={menu} alt="menu hambúrguer" />

          {/* <img src={close} alt="menu close" /> */}
        </button>
        <>
          <Link id="logo" to="/">
            <img src={explorer} alt="Logo foodExplorer" />
            <h1>food explorer</h1>
            {user.isAdmin && <span>admin</span>}
          </Link>

          <Search onSetSearch={onSetSearch} />

          {!user.isAdmin && (
            <div id="buttons">
              <LinkText
                name="Histórico de pedidos"
                to="/requests"
                id="historic"
              />
              <LinkText name="Meus favoritos" to="/favorites" id="fav" />
            </div>
          )}
          {user.isAdmin && <LinkText name="Novo prato" to="/new" id="new" />}

          <Link
            to={user.isAdmin ? '/requests' : '/payment'}
            id="receiptDesktop"
          >
            <Button
              id="redBtn"
              title={
                user.isAdmin
                  ? `Pedidos (${purchasesPending.length})`
                  : `(${userRequests.length})`
              }
              icon={user.isAdmin ? IoReceiptOutline : FiShoppingCart}
            />
          </Link>

          <FiLogOut id="logout" onClick={handleSignOut} />

          <Link to={user.isAdmin ? '/requests' : '/payment'}>
            <button id="receipt">
              {user.isAdmin ? <IoReceiptOutline /> : <FiShoppingCart />}

              <span>
                {user.isAdmin ? purchasesPending.length : userRequests.length}
              </span>
            </button>
          </Link>
        </>
      </header>
    </Container>
  )
}
