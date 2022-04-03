import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import Create from './components/Create'
import Update from './components/Update'

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Switch>
        <Route path = '/edit/:id'>
          <Update />
        </Route>
        <Route path ="/new">
          <Create />
        </Route>
        <Route path ='/'>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
