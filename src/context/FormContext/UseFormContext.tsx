import { useContext } from 'react'
import { FormContext } from '.'

export function UseFormContext() {
  const context = useContext(FormContext)

  return context
}
