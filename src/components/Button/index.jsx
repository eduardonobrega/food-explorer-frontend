import { Container } from './styles';

export function Button({ icon, onClick, title, ...rest }) {
  return (
    <Container  {...rest}>
        {icon && <img src={icon} alt="" />}
        {title}
    </Container>
  );
}
