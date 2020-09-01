import { combineReducers, createStore } from 'redux';
import { enhancer, reducers } from '@baaz/adapter';

import myReducers from './store/reducers';
// export default createStore(rootReducer, rootEnhancer);
const rootReducer = combineReducers({ ...reducers, ...myReducers });

//const rootReducer = combineReducers(reducers);

export default createStore(rootReducer, enhancer);
