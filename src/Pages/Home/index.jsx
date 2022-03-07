import React, { Fragment } from 'react';
import { AppBody } from './styled'
import Header from '../../Components/Header'

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
        <AppBody >
          <h1>This is a body</h1>
          <Routes>
            <Route path="/" exact />
          </Routes>
        </AppBody>
      </BrowserRouter>
    </Fragment>
  );
}

export default Home;
