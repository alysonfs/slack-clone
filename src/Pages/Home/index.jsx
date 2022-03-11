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
import Spinner from 'react-spinkit';

function Home () {
  const dispatch = useDispatch()
  const [user, loading] = useAuthState(auth)
  if (user) dispatch(login({
    id: user.uid,
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL
  }))

  if (loading) {
    return (
      <Fragment>
      <AppLoading id='app-loading'>
        <AppLoadingContent id='app-loading-content'>
          <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Slack-Logo.png" alt="slack" />
          <Spinner 
            name="double-bounce" 
            color='#0a8d48'
            fadeIn='none'/>
        </AppLoadingContent>
      </AppLoading>
      </Fragment>
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
