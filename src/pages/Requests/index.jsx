import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SelectStatus } from '../../components/SelectStatus';

import { useAuth } from '../../hooks/auth';


import { Container, Content, RequestMobile } from './styles';

export function Requests() {
  const { user } = useAuth();


  return (
    <Container>
      <Header />
      <main>
        <Content>
          {user.isAdmin ? <h1>Pedidos</h1> : <h1>Histórico de pedidos</h1>}

          <section id="requests">
            <RequestMobile isAdmin={user.isAdmin}>
              <span className="code">000004</span>
              {/* <SelectStatus isDisabled /> */}
              <span className="time">20/05 às 18h00</span>

              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>
              <SelectStatus className="status" isDisabled={!user.isAdmin} />
            </RequestMobile>
            <RequestMobile isAdmin={user.isAdmin}>
              <span className="code">000004</span>
              {/* <SelectStatus isDisabled /> */}
              <span className="time">20/05 às 18h00</span>

              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>
              <SelectStatus className="status" isDisabled={!user.isAdmin} />
            </RequestMobile>
            <RequestMobile isAdmin={user.isAdmin}>
              <span className="code">000004</span>
              {/* <SelectStatus isDisabled /> */}
              <span className="time">20/05 às 18h00</span>

              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>
              <SelectStatus className="status" isDisabled={!user.isAdmin} />
            </RequestMobile>
            <RequestMobile isAdmin={user.isAdmin}>
              <span className="code">000004</span>
              {/* <SelectStatus isDisabled /> */}
              <span className="time">20/05 às 18h00</span>

              <p className="details">
                1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
                Suco de Maracujá
              </p>
              <SelectStatus className="status" isDisabled={!user.isAdmin} />
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
                <td>
                  <SelectStatus isDisabled={!user.isAdmin} />
                </td>

                <td className="code">000004</td>

                <td className="details">
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td className="time">20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <SelectStatus isDisabled={!user.isAdmin} />
                </td>

                <td className="code">000003</td>

                <td className="details">
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td className="time">20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <SelectStatus isDisabled={!user.isAdmin} />
                </td>

                <td className="code">000002</td>

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
