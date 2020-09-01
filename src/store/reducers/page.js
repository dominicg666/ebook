import { handleActions } from 'redux-actions';
import actions from '../actions/Page';
export const name = 'page';

const initialState = {
  data: [],
};

const reducerMap = {
  
  [actions.begin]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },
  [actions.set]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    };
  },
};

export default handleActions(reducerMap, initialState);