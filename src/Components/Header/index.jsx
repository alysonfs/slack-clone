import React from 'react'
import {
  HeaderAvatar, HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch
} from './styled.js'
import { AccessTime, Search, HelpOutline } from '@mui/icons-material'
import { signOut, auth } from '../../app/firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../app/features/authSlice'
import { useSelector } from 'react-redux'
import { selectUser } from '../../app/features/authSlice'

function Header () {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const signoutApp = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout)
      })
  }

  return (
    <HeaderContainer id='header'>
      <HeaderLeft >
        <HeaderAvatar
          src={user?.photoUrl}
          alt={user?.name}
          onClick={signoutApp}
        />
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

