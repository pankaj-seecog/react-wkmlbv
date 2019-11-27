import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import Home from './Home';
import thunk from "redux-thunk";
import axios from 'axios';
let iniState = {
  users : []
}

let rootReducer=(state=iniState,action)=>{
switch(action.type){
case "GET_USERS":
return {
  ...state,
  users : action.payload
}
}
return state;
}
let store = createStore(rootReducer,applyMiddleware(thunk));





// store.dispatch(fetch_user_details());

render(<Provider store={store}><Home /></Provider>, document.getElementById('root'));
