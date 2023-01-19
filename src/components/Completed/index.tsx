import { ContainerS } from './style'
import iconComplete from '../../assets/images/icon-complete.svg'
import { ButtonS } from '../Form/style'
import { motion } from 'framer-motion'

export function Completed() {
  const dropIn = {
    initial: {
      opacity: 0,
      scale: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        type: 'spring',
        damping: 20,
        stiffness: 70
      },
      scale: 1
    }
  }

  function handleClick() {
    window.location.reload()
  }

  return (
    <motion.div variants={dropIn} initial="initial" animate="animate">
      <ContainerS>
        <figure>
          <img src={iconComplete} alt="Icon Complete" />
        </figure>
        <h1>thank you!</h1>
        <p>We've added your card details</p>
        <ButtonS onClick={handleClick}>Continue</ButtonS>
      </ContainerS>
    </motion.div>
  )
}
