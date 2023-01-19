import cardFront from '../../assets/images/bg-card-front.png'
import cardBack from '../../assets/images/bg-card-back.png'
import {
  CardBackS,
  CardFrontS,
  CardNumberS,
  ContainerS,
  CvcS,
  DateS,
  NameS,
  TransparentBallS,
  WhiteBallS
} from './style'
import { UseFormContext } from '../../context/FormContext/UseFormContext'

export function Card() {
  const { name, number, month, year, cvc } = UseFormContext()

  return (
    <ContainerS>
      <CardFrontS>
        <figure>
          <img src={cardFront} alt="Card Front" />
        </figure>
        <WhiteBallS></WhiteBallS>
        <TransparentBallS></TransparentBallS>
        <CardNumberS>{number}</CardNumberS>
        <NameS>{name}</NameS>
        <DateS>
          {month}/{year}
        </DateS>
      </CardFrontS>
      <CardBackS>
        <figure>
          <img src={cardBack} alt="Card Back" />
        </figure>
        <CvcS>{cvc}</CvcS>
      </CardBackS>
    </ContainerS>
  )
}
