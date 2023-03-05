import { Container } from "./styles";

export function LinkText({name, icon, ...rest}) {
  return(
    <Container {...rest}>
      {
        icon && (
          <img src={icon} />
        )
      }
      {name}
    </Container>
  )
}