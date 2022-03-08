import React from 'react'
import {
  HeaderAvatar, HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch
} from './styled.js'
import { AccessTime, Search, HelpOutline } from '@mui/icons-material'

function Header () {
  return (
    <HeaderContainer id='header'>
      <HeaderLeft >
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch >
        <Search />
        <input placeholder='Seach' type="text" />
      </HeaderSearch>
      <HeaderRight >
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

