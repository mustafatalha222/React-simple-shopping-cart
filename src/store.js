import rootReducer from './reducers'
import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk';

const middle=[thunk];
const initialstate={}
const store = createStore(rootReducer,initialstate,compose(
    applyMiddleware(...middle)
))

export default store;