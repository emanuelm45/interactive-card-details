import styled from 'styled-components'

export const ButtonS = styled.button`
  border-radius: 6px;
  background-color: var(--clr-very-dark-violet);
  color: var(--clr-white);
  padding: 0.8rem;
  font-size: 1.1rem;
  transition: scale 0.3s;
  margin: 1.5rem 0;

  &:hover {
    scale: 1.1;
  }
`

export const FormContentS = styled.fieldset`
  display: grid;
  width: min(400px, 80vw);
  grid-template-areas:
    'name name name '
    'number number number'
    'date date cvc'
    'button button button';
  gap: 1.5rem;

  ${ButtonS} {
    grid-area: button;
  }
`

export const InputS = styled.input`
  border: 1px solid var(--clr-light-grayish-violet);
  padding: 0.6rem;
  border-radius: 6px;

  &:focus {
    outline: 2px solid var(--clr-very-dark-violet);
  }
`

export const FormGroupS = styled.div`
  text-transform: uppercase;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.4rem;

  ${InputS} {
    width: 100%;

    &::placeholder {
      color: var(--clr-dark-grayish-violet);
    }
  }

  label {
    display: block;
    letter-spacing: 2px;
  }

  &.name {
    grid-area: name;
  }
  &.number {
    grid-area: number;
  }
  &.date {
    grid-area: date;

    div {
      display: grid;
      grid-template-areas:
        'input1 input2'
        'error1 error2';
      column-gap: 1rem;
      row-gap: 0.4rem;
    }

    input:nth-child(1) {
      grid-area: input1;
    }
    input:nth-child(2) {
      grid-area: input2;
    }
    span:nth-child(1) {
      grid-area: error2;
    }
    span:nth-child(2) {
      grid-area: error1;
    }
  }
  &.cvc {
    grid-area: cvc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ErrorS = styled.span`
  color: red;
  text-transform: none;
  font-size: 0.9rem;
`
