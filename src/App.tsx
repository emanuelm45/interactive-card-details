import { AnimatePresence } from 'framer-motion'
import { GlobalStyle } from './assets/GlobalStyle'
import { Card, ContainerS, Form, Completed } from './components'
import { UseFormContext } from './context/FormContext/UseFormContext'

function App() {
  const { isSubmited } = UseFormContext()
  return (
    <div className="App">
      <GlobalStyle />
      <ContainerS>
        <Card />
        <AnimatePresence>
          {!isSubmited ? <Form /> : <Completed />}
        </AnimatePresence>
      </ContainerS>
    </div>
  )
}

export default App
