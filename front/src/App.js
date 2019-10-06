import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

//Style
import theme from './styles/theme';

//Components
import Router from './components/router/Router';

function App() {
    return (
        <div className="app">
            <MuiThemeProvider theme={theme}>
                <Switch>
                    <Router />
                </Switch>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
