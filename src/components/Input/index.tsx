import { useState } from 'react'
import * as S from './styles'

export type InputProps = {
  callbackOnBlur?: (value: string) => void
  callbackOnChange?: (value: string) => void
  label?: string
  name?: string
  inputSize?: 'normal' | 'small'
  spaceBetween?: boolean
  type?: string
}

const Input = ({
  callbackOnBlur,
  callbackOnChange,
  label = 'Search',
  name = 'search',
  inputSize = 'normal',
  spaceBetween = false,
  type = 'text'
}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <S.Wrapper spaceBetween={spaceBetween}>
      <S.Label htmlFor={name} inputSize={inputSize}>
        {label}
      </S.Label>
      <S.Input
        aria-label={name}
        id={name}
        name={name}
        onBlur={() => {
          if (callbackOnBlur) {
            callbackOnBlur(inputValue)
          }
        }}
        onChange={(event) => {
          setInputValue(event.target.value)
          if (callbackOnChange) {
            callbackOnChange(event.target.value)
          }
        }}
        inputSize={inputSize}
        type={type}
        value={inputValue}
      />
    </S.Wrapper>
  )
}

export default Input
