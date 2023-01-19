import styled from 'styled-components'

export const CardFrontS = styled.div`
  position: relative;
`
export const CardBackS = styled.div`
  position: relative;
`

export const CardNumberS = styled.span`
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  width: 85%;
  text-align: left;
`
export const NameS = styled.span`
  left: 2rem;
  bottom: 2rem;
  width: 300px;
`
export const DateS = styled.span`
  right: 2rem;
  bottom: 2rem;
  text-align: left;
`

export const CvcS = styled.span`
  top: 6.9rem;
  right: 3rem;
`

export const WhiteBallS = styled.div`
  aspect-ratio: 1/1;
  width: 50px;
  background-color: var(--clr-white);
  border-radius: 50%;
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
`
export const TransparentBallS = styled.div`
  aspect-ratio: 1/1;
  width: 30px;
  border: 2px solid var(--clr-white);
  border-radius: 50%;
  position: absolute;
  top: 2.6rem;
  left: 6rem;
`

export const ContainerS = styled.div`
  position: relative;
  left: 50px;
  width: min(550px, 70vw);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  /* margin: 0 auto; */

  ${CardFrontS} {
    align-self: flex-start;
  }

  span {
    position: absolute;
    color: var(--clr-white);
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  @media (max-width: 1100px) {
    align-items: center;

    ${CardFrontS} {
      top: 15rem;
      left: -10rem;
      align-self: unset;
      z-index: 1;
    }

    ${CardBackS} {
      top: -13rem;
      left: -3rem;
    }
  }

  @media (max-width: 700px) {
    left: 0;
    align-items: center;

    img {
      width: 300px;
    }

    ${CardFrontS} {
      top: 9rem;
      left: -0.8rem;
      align-self: unset;
      z-index: 1;
    }

    ${CardBackS} {
      top: -10rem;
      left: 0.8rem;
    }

    ${CardNumberS} {
      font-size: 1.1rem;
    }

    ${NameS} {
      font-size: 0.8rem;
      bottom: 1rem;
      left: 1.2rem;
      width: 200px;
    }

    ${DateS} {
      font-size: 0.8rem;
      bottom: 1rem;
      right: 1.2rem;
    }

    ${CvcS} {
      top: 4.5rem;
      right: 2rem;
    }

    ${WhiteBallS} {
      width: 35px;
      top: 1.5rem;
    }

    ${TransparentBallS} {
      width: 20px;
      left: 4.8rem;
      top: 2.2rem;
    }
  }
`
