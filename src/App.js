import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { LandingPage, HomePage, ErrorPage } from "./pages/index";
import { ThemeProvider } from '@material-ui/core';
import theme from './styles/material-ui-theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div 
          className="App"
        >
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/search" component={HomePage}/>
          <Route exact path="/error" component={ErrorPage}/>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
