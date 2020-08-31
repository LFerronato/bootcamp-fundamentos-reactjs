import React from 'react'

import { Link } from 'react-router-dom'

import { Container, NavItem } from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  size?: 'small' | 'large'
  activated?: ('a' | 'i')[]
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  activated = ['i', 'i'],
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavItem activated={activated[0]}>
          <Link to="/">Listagem</Link>
        </NavItem>
        <NavItem activated={activated[1]}>
          <Link to="/import">Importar</Link>
        </NavItem>
      </nav>
    </header>
  </Container>
)

export default Header
