import { useState } from 'react';
import { IoReceiptOutline } from 'react-icons/io5';
import { Container } from './styles';

import { Button } from '../Button';

import creditCard from '../../assets/icons/creditCard.svg';
import pix from '../../assets/icons/pix.svg';
import qrCode from '../../assets/qr-code.svg';
import forkKnife from '../../assets/forkKnife.svg';
import check from '../../assets/check.svg';
import clock from '../../assets/clock.svg';

export function PaymentItem() {
  const [pixSelected, setPixSelected] = useState(true);

  const [purchase, setPurchase] = useState('initial'); // 'initial await pay delivered';

  return (
    <Container>
      <div id="buttons">
        <button
          className={pixSelected ? 'selected' : ''}
          onClick={() => setPixSelected(true)}
        >
          <img src={pix} alt="ícone do pix" />
          PIX
        </button>

        <button
          className={pixSelected ? '' : 'selected'}
          onClick={() => setPixSelected(false)}
        >
          <img src={creditCard} alt="ícone de um cartão de credito" />
          Crédito
        </button>
      </div>

      <div className="payment">
        {pixSelected && purchase == 'initial' && (
          <img src={qrCode} alt="Qr-code" />
        )}

        {!pixSelected && purchase == 'initial' && (
          <form action="">
            <div className="input-wrapper">
              <label htmlFor="card">Número do Cartão</label>
              <input type="number" id="card" placeholder="0000 0000 0000 0000" />
            </div>

            <div id="twoColumns">
              <div className="input-wrapper">
                <label htmlFor="validity">Validade</label>
                <input type="number" id="validity" placeholder="04/25" />
              </div>

              <div className="input-wrapper">
                <label htmlFor="codeCard">CVC</label>
                <input type="number" id="codeCard" placeholder="000" />
              </div>
            </div>

            <Button
              type="button"
              icon={IoReceiptOutline}
              title="Finalizar pagamento"
            />
          </form>
        )}

        {purchase != 'initial' && (
          <div id='state'>
            {purchase == 'await' && (
              <>
                <img src={clock} alt="ícone de um relógio" />
                <p>Aguardando pagamento no caixa</p>
              </>
            )}
            {purchase == 'pay' && (
              <>
                <img src={check} alt="ícone de afirmação" />
                <p>Pagamento aprovado!</p>
              </>
            )}
            {purchase == 'delivered' && (
              <>
                <img src={forkKnife} alt="ícone de uma faca e um garfo" />
                <p>Pedido entregue!</p>
              </>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
