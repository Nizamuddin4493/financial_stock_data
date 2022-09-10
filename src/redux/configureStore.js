import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer, { categoriesThunk } from './categories/categories';

const rootReducer = combineReducers({ categoriesReducer });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

store.dispatch(categoriesThunk());

export default store;
