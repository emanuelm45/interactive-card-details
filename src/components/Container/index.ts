import styled from 'styled-components'
import background from '../../assets/images/bg-main-desktop.png'
import backgroundMobile from '../../assets/images/bg-main-mobile.png'

export const ContainerS = styled.div`
  background: url(${background}) no-repeat center left;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1100px) {
    background: none;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3rem;
  }

  @media (max-width: 700px) {
    gap: 0;
  }

  @media (max-width: 425px) {
    background: url(${backgroundMobile}) no-repeat center top;
  }
`
