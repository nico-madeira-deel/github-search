import React from 'react'
import * as S from './styles'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => <S.Wrapper>{children}</S.Wrapper>

export default Card
