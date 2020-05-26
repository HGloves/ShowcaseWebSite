import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Router as DomRouter } from 'react-router-dom';

//Style
import theme from './styles/theme';

//Components
import Router from './components/router/Router';

import { createBrowserHistory } from "history"
const history = createBrowserHistory()

function App() {
    return (
        <DomRouter history={history}>
            <div className="app" id='scrollDiv'>
                <MuiThemeProvider theme={theme}>
                    <Switch>
                        <Router />
                    </Switch>
                </MuiThemeProvider>
            </div>
        </DomRouter>
    );
}

export default App;
