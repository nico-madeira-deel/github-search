import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick: () => void
}

const Button = ({ children, disabled = false, onClick }: ButtonProps) => (
  <S.Wrapper disabled={disabled} onClick={onClick} type="button">
    {children}
  </S.Wrapper>
)

export default Button
