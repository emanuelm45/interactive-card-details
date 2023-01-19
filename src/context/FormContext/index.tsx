import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { cardSchema } from '../../utils/validate'

interface IFormProps {
  name: string
  number: string
  month: string
  year: string
  cvc: string
  setName: Dispatch<SetStateAction<string>>
  setNumber: Dispatch<SetStateAction<string>>
  setMonth: Dispatch<SetStateAction<string>>
  setYear: Dispatch<SetStateAction<string>>
  setCvc: Dispatch<SetStateAction<string>>
  isSubmited: boolean
  setIsSubmited: Dispatch<SetStateAction<boolean>>
}

interface IFormProvider {
  children: JSX.Element
}

export const FormContext = createContext({} as IFormProps)

export function FormProvider({ children }: IFormProvider) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  useEffect(() => {
    if (!name) setName(cardSchema.getDefault().name)
    if (!number) setNumber(cardSchema.getDefault().cardNumber)
    if (!month) setMonth(cardSchema.getDefault().month)
    if (!year) setYear(cardSchema.getDefault().year)
    if (!cvc) setCvc(cardSchema.getDefault().cvc)
  }, [name, number, month, year, cvc])

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        number,
        setNumber,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
        isSubmited,
        setIsSubmited
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
