import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SelectStatus } from '../../components/SelectStatus';

import { Container, Content, RequestMobile } from './styles';

export function Requests() {
  const isAdmin = false;
  return (
    <Container>
      <Header />

      <main>
        <Content>
          {isAdmin ? <h1>Pedidos</h1> : <h1>Histórico de pedidos</h1>}

          <section id="requests">
            <RequestMobile>
              <div className="info">
                <span className="code">000004</span>
                {!isAdmin && <span className="status">Pendente</span>}
                <span className="time">20/05 às 18h00</span>
              </div>
              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>

              {isAdmin && <SelectStatus />}
            </RequestMobile>
            
            <RequestMobile>
              <div className="info">
                <span className="code">000004</span>
                {!isAdmin && <span className="status">Pendente</span>}
                <span className="time">20/05 às 18h00</span>
              </div>
              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>

              {isAdmin && <SelectStatus />}
            </RequestMobile>
            
            <RequestMobile>
              <div className="info">
                <span className="code">000004</span>
                {!isAdmin && <span className="status">Pendente</span>}
                <span className="time">20/05 às 18h00</span>
              </div>
              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>

              {isAdmin && <SelectStatus />}
            </RequestMobile>
            
            <RequestMobile>
              <div className="info">
                <span className="code">000004</span>
                {!isAdmin && <span className="status">Pendente</span>}
                <span className="time">20/05 às 18h00</span>
              </div>
              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>

              {isAdmin && <SelectStatus />}
            </RequestMobile>
            
          </section>

          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="status">Pendente</td>

                <td className="code">000004</td>

                <td className="details">
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td className="time">20/05 às 18h00</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
