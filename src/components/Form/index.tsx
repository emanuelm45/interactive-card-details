import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UseFormContext } from '../../context/FormContext/UseFormContext'
import { ButtonS, ErrorS, FormContentS, FormGroupS, InputS } from './style'
import { cardSchema, formatCardNumber, IFormProps } from '../../utils/validate'

export function Form() {
  const {
    setName,
    number,
    setNumber,
    setMonth,
    setYear,
    setCvc,
    setIsSubmited
  } = UseFormContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormProps>({ resolver: yupResolver(cardSchema) })

  async function onSubmit(data: IFormProps) {
    setIsSubmited(await cardSchema.isValid(data))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContentS>
          <FormGroupS className="name">
            <label htmlFor="input-name">cardholder name</label>
            <InputS
              id="input-name"
              placeholder="e.g. Jane Appleseed"
              maxLength={40}
              {...register('name')}
              onChange={ev => setName(ev.currentTarget.value)}
              autoComplete="off"
            />
            {errors.name && <ErrorS>{errors.name.message}</ErrorS>}
          </FormGroupS>
          <FormGroupS className="number">
            <label htmlFor="input-card-number">card number</label>
            <InputS
              id="input-card-number"
              placeholder="e.g. 1234 5678 9123 0000"
              {...register('cardNumber')}
              maxLength={19}
              onChange={ev => {
                ev.currentTarget.value = formatCardNumber(
                  ev.currentTarget.value
                )
                setNumber(formatCardNumber(ev.currentTarget.value))
              }}
              autoComplete="off"
            />
            {errors.cardNumber && <ErrorS>{errors.cardNumber.message}</ErrorS>}
          </FormGroupS>
          <FormGroupS className="date">
            <label htmlFor="input-month">exp. date (mm/yy)</label>
            <div>
              <InputS
                id="input-month"
                placeholder="MM"
                {...register('month')}
                maxLength={2}
                onChange={ev => setMonth(ev.currentTarget.value)}
                autoComplete="off"
              />
              {errors.month && <ErrorS>{errors.month.message}</ErrorS>}
              <InputS
                id="input-year"
                placeholder="YY"
                {...register('year')}
                maxLength={2}
                onChange={ev => setYear(ev.currentTarget.value)}
                autoComplete="off"
              />
              {errors.year && <ErrorS>{errors.year.message}</ErrorS>}
            </div>
          </FormGroupS>
          <FormGroupS className="cvc">
            <label htmlFor="input-cvc">cvc</label>
            <InputS
              id="input-cvc"
              placeholder="e.g. 123"
              {...register('cvc')}
              maxLength={3}
              onChange={ev => console.log(ev.currentTarget.value)}
              autoComplete="off"
            />
            {errors.cvc && <ErrorS>{errors.cvc.message}</ErrorS>}
          </FormGroupS>
          <ButtonS>Confirm</ButtonS>
        </FormContentS>
      </form>
    </motion.div>
  )
}
