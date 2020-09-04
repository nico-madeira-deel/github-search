import { useState } from 'react'
import * as S from './styles'
import Logo from 'components/Logo'
import Input from 'components/Input'
import Button from 'components/Button'
import { useUser } from 'contexts/UserContext'

export type LayoutProps = {
  children?: React.ReactNode
  condensed?: boolean
}

const Layout = ({ children, condensed = false }: LayoutProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const { fetchUserData } = useUser()

  const handleInputChange = (value: string) => {
    setButtonDisabled(!value)
  }

  const handleInputBlur = (value: string) => {
    if (value) {
      setSearchValue(value)
    }
  }

  return (
    <S.Wrapper data-testid="layout" condensed={condensed}>
      <S.Header>
        <Logo size={condensed ? 'small' : 'normal'} />
        <S.Title>Github Search</S.Title>
      </S.Header>
      <S.Main>
        {!condensed ? (
          <S.Description>
            An application for search users and users repositories in github
          </S.Description>
        ) : null}
        <div className="row">
          <Input
            callbackOnBlur={(value) => handleInputBlur(value)}
            callbackOnChange={(value) => handleInputChange(value)}
            size={condensed ? 'small' : 'normal'}
            spaceBetween={!condensed}
          />
          <Button
            disabled={buttonDisabled}
            onClick={() => fetchUserData(searchValue)}
          >
            Enter
          </Button>
        </div>
        {children}
      </S.Main>
    </S.Wrapper>
  )
}

export default Layout
