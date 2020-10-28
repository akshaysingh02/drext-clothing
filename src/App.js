import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shop.component'
import SignUpAndSignIn from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component'



function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signin' component={SignUpAndSignIn} />
    </Switch>
    </div>

  );
}

export default App;
