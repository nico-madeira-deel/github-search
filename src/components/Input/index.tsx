import { useState } from 'react'
import * as S from './styles'

export type InputProps = {
  callbackOnBlur: (value: string) => void
  callbackOnChange?: (value: string) => void
  label?: string
  name?: string
  size?: 'normal' | 'small'
  spaceBetween?: boolean
  type?: string
}

const Input = ({
  callbackOnBlur,
  callbackOnChange,
  label = 'Search',
  name = 'search',
  size = 'normal',
  spaceBetween = false,
  type = 'text'
}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <S.Wrapper spaceBetween={spaceBetween}>
      <S.Label htmlFor={name} size={size}>
        {label}
      </S.Label>
      <S.Input
        aria-label={name}
        id={name}
        name={name}
        onBlur={() => callbackOnBlur(inputValue)}
        onChange={(event) => {
          setInputValue(event.target.value)
          callbackOnChange(event.target.value)
        }}
        size={size}
        type={type}
        value={inputValue}
      />
    </S.Wrapper>
  )
}

export default Input
