import React, { Fragment } from 'react';
import { AppBody } from './styled';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Home () {
  return (
    <Fragment >
      <BrowserRouter>
        <Header />
        <AppBody id='app-body'>
          <Sidebar />
          <Routes>
            <Route path="/" exact />
          </Routes>
        </AppBody>
      </BrowserRouter>
    </Fragment>
  );
}

export default Home;
