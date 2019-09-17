import React from 'react';
import App from '../components/page/app';
import { constants as C } from './constants';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={C.APP_ROUTE} component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;