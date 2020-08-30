import { useState } from 'react'
import * as S from './styles'

export type InputProps = {
  callbackInput: (value: string) => void
  label?: string
  name?: string
  size?: 'normal' | 'small'
  spaceBetween?: boolean
}

const Input = ({
  callbackInput,
  label = 'Search',
  name = 'search',
  size = 'normal',
  spaceBetween = true
}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <S.Wrapper spaceBetween={spaceBetween}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        aria-label={name}
        id={name}
        name={name}
        onBlur={() => callbackInput(inputValue)}
        onChange={(event) => setInputValue(event.target.value)}
        size={size}
        type="text"
        value={inputValue}
      />
    </S.Wrapper>
  )
}

export default Input
