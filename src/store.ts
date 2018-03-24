import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './Reducers';

/* tslint:disable */
const composeEnhancers =
    typeof window === 'object' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
        }) : compose;
/* tslint:enable */

const storeEnhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(reducer, storeEnhancer);

export default store;