import React, { Suspense, lazy } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Pageloader from '../Loader'
const PageList = lazy(() => import('../PageList'));
const EditPage = lazy(() => import('../EditPage'));

const Routes = () => {
    const loader=<Pageloader />;
    return (
        <Suspense fallback={loader}>
            <HashRouter basename="/">
                <Switch>
                    <Route exact path="/">
                        <PageList />
                    </Route>
                    <Route exact path="/create-page">
                        <EditPage />
                    </Route>
                    <Route exact path="/edit-page">
                        <EditPage />
                    </Route>
                </Switch>
            </HashRouter>
        </Suspense>
    );
};

export default Routes;
