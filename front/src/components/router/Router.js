//Imports
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Components
import ErrorPageComponent from '../Error/ErrorPageComponent';
import LayoutComponent from '../Layout/LayoutComponent';

// Routes
import routes from "./Routes"

import './Router.css'

class Router extends Component {

    getSplittedUrl = () => {
        let url = window.location.href.replace(window.location.origin + '/', '');

        if (url[url.length - 1] !== '/')
            url += '/';
        url = url.split(/(?=\/)/g).slice(0, -1);
        (url.length) ? url[0] = '/' + url[0] : url = ['/'];
        return url;
    }

    displayComponent = (routesList, key) => {
        const url = this.getSplittedUrl();

        for (let i = 0; i !== routesList.length; i += 1) {
            if (routesList[i].path === url[key]) {
                if (key === url.length - 1) {
                    return { component: routesList[i].component };
                } else
                    return this.displayComponent(routesList[i].children, key + 1);
            }
        };
        return { component: ErrorPageComponent };
    }

    render() {
        let route = this.displayComponent(routes, 0);
        console.log(route);

        return (
            <div className="app">
                <div className="layout">
                    <LayoutComponent />
                </div>
                <div className="content">
                    <Route component={route.component} />
                </div>
            </div>
        );
    }
}

export default Router;