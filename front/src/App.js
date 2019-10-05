import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';

//Components
import Router from './components/router/Router';

function App() {
  return (
    <div className="app">
        <Switch>
            <Router/>
        </Switch>
    </div>
  );
}

export default App;
