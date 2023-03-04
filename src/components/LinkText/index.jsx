import { Container } from "./styles";

export function LinkText({name, ...rest}) {
  return(
    <Container {...rest}>
      {name}
    </Container>
  )
}