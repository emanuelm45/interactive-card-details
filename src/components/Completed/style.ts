import styled from 'styled-components'
import { ButtonS } from '../Form/style'

export const ContainerS = styled.div`
  width: min(400px, 90vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 4px;
  }

  p {
    color: var(--clr-dark-grayish-violet);
  }

  ${ButtonS} {
    width: 85%;
  }
`
