import React from 'react'
import { LoginContainer, LoginInnerConteiner } from './styled'
import { Button } from '@mui/material'
import { auth, provider, signInWithPopup } from '../../app/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../app/features/authSlice'


function Login () {
  const dispatch = useDispatch()

  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(login({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      })
      .catch(error => console.log(error))
  }

  return (
    <LoginContainer>
      <LoginInnerConteiner>
        <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Slack-Logo.png" alt="slack" />
        <h1>Sign in to the Moldato Slack</h1>
        <p>slack.moldato.com</p>
        <Button onClick={signIn} >Sign in with Google</Button>
      </LoginInnerConteiner>
    </LoginContainer>
  )
}

export default Login