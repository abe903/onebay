import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Events from './components/events';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
