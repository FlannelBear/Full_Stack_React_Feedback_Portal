import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import axios from 'axios';

const feedbackReducer = (state = { feedback: [], entry: {}}, action) => {

    switch(action.type){
        case 'GET':
            axios.get('/feedback').then((response)=>{
                return { ...state, feedback: [...response.data]}
            }).catch((error)=>{
                alert('Error handling GET in reducer');
            });
            break;
        case 'feeling':
            return {...state, entry: {...state.entry, feeling: action.payload}};
            break;
        case 'understanding':
            return {...state, entry: {...state.entry, understanding: action.payload}};        
            break;
        case 'support':
            return {...state, entry: {...state.entry, support: action.payload}};
            break;
        case 'comment':
            return {...state, entry: {...state.entry, comment: action.payload}};            
            break;
    } 

    return state;
}

const storeInstance = createStore(
    combineReducers(
        feedbackReducer
    ),
    applyMiddleware(logger)
);
 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
