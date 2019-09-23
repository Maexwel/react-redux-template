import React from 'react';
import App from '../components/page/app';
import { constants as C } from './constants';
import { BrowserRouter, Switch } from 'react-router-dom';
import Page from '../components/page/template/page';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Page path={C.APP_ROUTE} component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;