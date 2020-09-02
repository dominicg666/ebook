import React, { useCallback, useEffect, Suspense, lazy } from 'react';
import { array, func, shape, string } from 'prop-types';
import { useApp } from '@baaz/adapter/lib/App/useApp';
import { usePage } from '../../Hooks/App/usePage'
import { HeadProvider, Title } from 'buikit/lib/Head';
import { registerMessageHandler } from 'buikit/util/swUtils';
import Mask from 'buikit/lib/Mask';
import Main from '../Main';
import Routes from '../Routes';
import { HTML_UPDATE_AVAILABLE } from '../../constants/swMessageTypes';

const Navigation = lazy(() => import('../Navigation'));

const App = props => {
    const { markErrorHandled, renderError, unhandledErrors } = props;

    usePage();
    const handleIsOffline = useCallback(() => {

    }, []);

    const handleIsOnline = useCallback(() => {

    }, []);

    const handleHTMLUpdate = useCallback(
        async resetHTMLUpdateAvaiableFlag => {

        },
        []
    );

    const handleError = useCallback(
        (error, id, loc, handleDismissError) => {

            //localStorage.clear();
        },
        []
    );

    const talonProps = useApp({
        handleError,
        handleIsOffline,
        handleIsOnline,
        handleHTMLUpdate,
        markErrorHandled,
        renderError,
        unhandledErrors
    });

    const {
        hasOverlay,
        handleCloseDrawer,
        setHTMLUpdateAvailable,
    } = talonProps;

    useEffect(() => {
        const unregisterHandler = registerMessageHandler(
            HTML_UPDATE_AVAILABLE,
            () => {
                setHTMLUpdateAvailable(true);
            }
        );
        return unregisterHandler;
    }, [setHTMLUpdateAvailable]);



    if (renderError) {
        return (
            <HeadProvider>
                <Title>{`${PWA_NAME}`}</Title>
                <Main isMasked={true} />
                <Mask isActive={true} />
            </HeadProvider>
        );
    }

    const _navigation =
        <Suspense fallback={null}>
            <Navigation />
        </Suspense>
    return (
        <HeadProvider>
            <Title>{`${PWA_NAME}`}</Title>
            <Main isMasked={hasOverlay}>
                <Routes />
            </Main>
            <Mask isActive={hasOverlay} dismiss={handleCloseDrawer} />
            {_navigation}
        </HeadProvider>
    );
};

App.propTypes = {
    markErrorHandled: func.isRequired,
    renderError: shape({
        stack: string
    }),
    unhandledErrors: array
};

export default App;
