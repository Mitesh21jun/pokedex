// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route,Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

function App() {
  return (
    <Switch>
      < exact path='/' render={(props)=> <Pokedex {...props}/> }/>
      < exact path='/:pokemonId' render={(props)=> <Pokemon {...props}/> }/>

    </Switch>
  )
}

export default App;
