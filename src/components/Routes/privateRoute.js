import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Util } from '@baaz/adapter';
const { BrowserPersistence } = Util;
const PrivateRoute = ({
    component: Component,
    //isAuthenticated,
    redirect: pathname,
    ...rest
}) => {

    const storage = new BrowserPersistence();
    const token = storage.getItem('signin_token');
    const isAuthenticated = token !== undefined;

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated === true ? (
                    <Component {...rest} {...props} />
                ) : (
                        <Redirect
                            to={pathname}
                        />
                    )
            }
        />
    )
}

PrivateRoute.defaultProps = { redirect: '/sign-in' }


export default PrivateRoute