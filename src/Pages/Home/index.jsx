import React, { Fragment } from 'react';
import { AppBody } from './styled';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Chat from '../../Components/Chat';
import Login from '../Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../app/firebase';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Home () {
  const [user, loding] = useAuthState(auth)

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
