import {combineReducers, createStore} from 'redux';

const appReducer = (state  = {message :'Hello world'}, action) => {
    return {...state}
}

const rootReducer = combineReducers({
    appReducer
});

const store = createStore(rootReducer);
export default store;