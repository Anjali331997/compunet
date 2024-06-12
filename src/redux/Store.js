import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({userReducer});

const store = createStore(reducer,applyMiddleware());

export default store;