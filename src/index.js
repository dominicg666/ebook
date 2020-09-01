import React from 'react';
import ReactDOM from 'react-dom';

import { Adapter } from 'buikit-drivers';
import store from './store';
import app from '@baaz/adapter/store/actions/app';
import App, { AppContextProvider } from './components/App';

import { registerSW } from './registerSW';
import './bootstrap/bootstrap.scss'
import './index.scss'

ReactDOM.render(
    <Adapter store={store}>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Adapter>,
    document.getElementById('container')
);

registerSW();

window.addEventListener('online', () => {
    store.dispatch(app.setOnline());
});
window.addEventListener('offline', () => {
    store.dispatch(app.setOffline());
});

if (module.hot) {
    // When any of the dependencies to this entry file change we should hot reload.
    module.hot.accept();
}
