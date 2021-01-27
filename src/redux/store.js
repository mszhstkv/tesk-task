import {applyMiddleware, combineReducers, createStore} from 'redux';
import reviewsReducer from './reviews-reducer';
import thunkMiddleWare from 'redux-thunk';
import newsReducer from './news-reducer';

let reducers = combineReducers({
    reviews: reviewsReducer,
    news: newsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;