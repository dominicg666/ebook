import { createActions } from 'redux-actions';

const prefix = 'page';
const actionTypes = [
  'BEGIN',
  'RESET',
  'SET'
];

const actionMap = {
  GET_DATA: {
    REQUEST: null,
    RECEIVE: null,
    REJECT: null
  },

};


export default createActions(actionMap, ...actionTypes, { prefix });