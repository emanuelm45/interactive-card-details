import * as yup from 'yup'
import { addMethod, setLocale, StringSchema } from 'yup'
import { Maybe, AnyObject } from 'yup/lib/types'

interface IFormProps {
  name: string
  cardNumber: string
  month: string
  year: string
  cvc: string
}

addMethod<StringSchema<string | undefined>>(
  yup.string,
  'checkMonth',
  function (message) {
    return this.test('checkMonth', message, function (value) {
      const { path, createError } = this
      if (parseInt(value!) > 12)
        return createError({
          path,
          message: message ?? 'Insert a valid month'
        })
      return true
    })
  }
)

addMethod<StringSchema<string | undefined>>(
  yup.string,
  'checkYear',
  function (message) {
    return this.test('checkYear', message, function (value) {
      const { path, createError } = this
      const thisYear = parseInt(
        new Date().getFullYear().toString().split('').slice(-2).join('')
      )
      if (parseInt(value!) < thisYear)
        return createError({
          path,
          message: message ?? 'Does your card past its expiry date?'
        })
      return true
    })
  }
)

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    checkMonth(): StringSchema<TType, TContext>
    checkYear(): StringSchema<TType, TContext>
  }
}

setLocale({
  string: {
    length: ({ length }) => `Must be ${length} characters long`
  }
})

const ERROR_BLANK = "Can't be blank"
const ERROR_FORMAT_NUMBERS = 'Wrong format, numbers only'

const cardSchema = yup
  .object({
    name: yup
      .string()
      .required(ERROR_BLANK)
      .max(40)
      .matches(/^[a-zA-Z\s]*$/g, {
        message: 'Wrong format, letters only',
        excludeEmptyString: true
      })
      .trim()
      .default('Jane Appleseed'),
    cardNumber: yup
      .string()
      .required(ERROR_BLANK)
      .length(19)
      .matches(/^[0-9\s]*$/, ERROR_FORMAT_NUMBERS)
      .default('0000 0000 0000 0000'),
    month: yup
      .string()
      .required(ERROR_BLANK)
      .length(2)
      .max(2)
      .matches(/^[0-9]*$/g, ERROR_FORMAT_NUMBERS)
      .checkMonth()
      .default('00'),
    year: yup
      .string()
      .required(ERROR_BLANK)
      .length(2)
      .max(2)
      .matches(/^[0-9]*$/g, ERROR_FORMAT_NUMBERS)
      .checkYear()
      .default('00'),
    cvc: yup
      .string()
      .required(ERROR_BLANK)
      .length(3)
      .max(3)
      .matches(/^[0-9]*$/g, ERROR_FORMAT_NUMBERS)
      .default('123')
  })
  .required()

function formatCardNumber(value: string) {
  value = value
    .replace(/[^\dA-Z]/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim()
  return value
}

export { cardSchema, formatCardNumber }
export type { IFormProps }
