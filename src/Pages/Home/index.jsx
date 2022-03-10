import React, { Fragment } from 'react';
import { AppBody, AppLoading, AppLoadingContent } from './styled';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Chat from '../../Components/Chat';
import Login from '../Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../app/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../app/features/authSlice'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Home () {
  const dispatch = useDispatch()
  const [user, loading] = useAuthState(auth)
  if (user) dispatch(login({
    name: user.displayName,
    email: user.email,
    id: user.uid,
    photoUrl: user.photoURL
  }))

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>

        </AppLoadingContent>
      </AppLoading>
    )
  }

  return (
    <Fragment >
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Fragment>
            <Header />
            <AppBody id='app-body'>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Chat />} />
              </Routes>
            </AppBody>
          </Fragment>
        )}
      </BrowserRouter>
    </Fragment>
  );
}

export default Home;
