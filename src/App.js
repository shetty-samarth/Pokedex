import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Pokedex from './components/Pokedex';
import AppNavigator from './components/AppNavigator';
import PokeDetails from './components/PokeDetails';

function App() {
  return (
      <Router basename="/">
        <AppNavigator />
        <Route exact path='/pokedex' component={() => (<Redirect to='/' />)} />
        <Route exact path='/' component={Pokedex} />
        <Route exact path='/pokemon/:id' component={PokeDetails} />
      </Router>
  );
}

export default App
