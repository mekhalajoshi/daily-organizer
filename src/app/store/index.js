import { createStore } from 'redux';
import defaultState from '../../server/defaultState';

// eslint-disable-next-line no-unused-vars
const store = createStore((state = defaultState, action) => state);

export default store;
