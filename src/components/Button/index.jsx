import { Container } from './styles';

export function Button({ icon: Icon, onClick, title, ...rest }) {
  return (
    <Container onClick={onClick}>
      {Icon && <Icon />}
      <button {...rest}>
        {title}
      </button>
    </Container>
  );
}
