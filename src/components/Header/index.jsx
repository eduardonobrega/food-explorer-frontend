import { useEffect, useState } from 'react';
import { FiSearch, FiLogOut } from 'react-icons/fi';

import { Input } from '../Input';
import { Button } from '../Button';
import { LinkText } from '../LinkText';

import menu from '../../assets/icons/menu.svg';
import close from '../../assets/icons/close.svg';
import explorer from '../../assets/icons/explorer.svg';
import receipt from '../../assets/icons/receipt.svg';

import { Container } from './styles';

export function Header({ isAdmin = false }) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((prevState) => !prevState);
  }

  useEffect(() => {
    const header = document.querySelector('header> header');
    const headerChildren = header.children;

    if (openMenu) {
      document.querySelector('#menuOpen').style.display = 'block';

      let heightPage = document.body.scrollHeight;
      window.scrollTo(0, heightPage);

      onscroll = () => {
        window.scrollTo(0, heightPage);
      };

      const btnMenu = headerChildren[0].querySelector('img');

      btnMenu.src = close;
      headerChildren[1].classList.add('hide');
      header.querySelector('button#receipt').style.display = 'none';

      header.querySelector('h2').style.display = 'block';
      
    } else {
      onscroll = () => {};

      const btnMenu = headerChildren[0].querySelector('img');

      btnMenu.src = menu;
      headerChildren[1].classList.remove('hide');
      header.querySelector('button#receipt').style.display = 'initial';
      header.querySelector('h2').style.display = 'none'
      document.querySelector('#menuOpen').style.display = 'none'
    }
  }, [openMenu]);

  return (
    <Container isAdmin={isAdmin}>
      <header>
        <button id='menuBurgue'>
          <img src={menu} alt="menu hambúrguer" onClick={handleMenu} />
        </button>

        <div id='logo'>
          <img src={explorer} alt="Logo foodExplorer" />
          <h1>food explorer</h1>
          {isAdmin && <span>admin</span>}
        </div>

        <div id="search">
          <FiSearch />
          <Input
            type="search"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>

        <Button
          id="redBtn"
          title={isAdmin ? 'Novo prato' : `Pedidos (${0})`}
          icon={isAdmin ? '' : receipt}
        />

        <FiLogOut id="logout" />

        {!isAdmin && (
          <button id='receipt'>
            <img src={receipt} alt="Ícone de um recibo" />
            <span>0</span>
          </button>
        )}
        <h2>Menu</h2>
      </header>

      <div id="menuOpen">
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
              <LinkText name="Novo prato" />
            </li>
          )}
          <li>
            <LinkText name="Sair" />
          </li>
        </ul>
      </div>
    </Container>
  );
}
