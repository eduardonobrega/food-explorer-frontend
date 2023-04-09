import { useEffect, useRef, useState } from 'react';
import { IoReceiptOutline } from 'react-icons/io5';

import { useAuth } from '../../hooks/auth';

import creditCard from '../../assets/icons/creditCard.svg';
import pix from '../../assets/icons/pix.svg';
import qrCode from '../../assets/qr-code.svg';
import forkKnife from '../../assets/forkKnife.svg';
import check from '../../assets/check.svg';
import clock from '../../assets/clock.svg';
import { Button } from '../Button';

import { Container } from './styles';

export function PaymentItem() {
  const [pixSelected, setPixSelected] = useState(true);
  const [purchase, setPurchase] = useState('initial'); // 'initial await pay delivered';
  const [pixCode, setPixCode] = useState('');
  const inputCopy = useRef();

  const [numberCard, setNumberCard] = useState('');

  const { createPurchases, userPurchases, userRequests } = useAuth();

  function copyText(e) {
    inputCopy.current.select();
    inputCopy.current.setSelectionRange(0, 99999);

    const text = inputCopy.current.value;
    if (!navigator.clipboard) {
      document.execCommand('copy');
    } else {
      navigator.clipboard.writeText(text);
    }
  }

  async function handlePurchase() {
    if (userRequests.length === 0) {
      return alert('Adicione oa menos um item no carrinho');
    }

    await createPurchases();
    setPurchase('await');
  }

  useEffect(() => {
    if (userRequests.length !== 0) {
      setPurchase('initial');
      return;
    }
    const lastPurchase = userPurchases[userPurchases.length - 1];
    if (lastPurchase) {
      console.log(lastPurchase);
      if (lastPurchase.status === 'pending') {
        setPurchase('await');
      } else if (lastPurchase.status === 'preparing') {
        setPurchase('pay');
      } else {
        setPurchase('delivered');
      }
    } else {
      setPurchase('initial');
    }
  }, [userPurchases]);

  useEffect(() => {
    const randomPixCode = (len) => {
      let code = '';

      do {
        code += Math.random().toString(36).slice(2);
      } while (code.length < len);

      code = code.slice(0, len);

      return code;
    };

    setPixCode(randomPixCode(30));
  }, []);

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
          <>
            <img src={qrCode} alt="Qr-code" />
            <div className="copy-wrapper">
              <input type="text" readOnly value={pixCode} ref={inputCopy} />
              <button onClick={copyText}>copy</button>
            </div>
          </>
        )}

        {!pixSelected && purchase == 'initial' && (
          <form action="">
            <div className="input-wrapper">
              <label htmlFor="card">Número do Cartão</label>
              <input
                type="number"
                id="card"
                placeholder="0000 0000 0000 0000"
              />
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
              onClick={handlePurchase}
            />
          </form>
        )}

        {purchase != 'initial' && (
          <div id="state">
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
                <p>
                  Seu ultimo pedido foi entregue! <br />{' '}
                  <span>
                    Adicione algo ao carrinho para fazer um novo pedido
                  </span>
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
