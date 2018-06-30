import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const databaseReducer = (state = [], action) => {
    if( action.type === 'GET'){
        return [...action.payload];
    }
    return state;
} // end databaseReducer

const feedbackReducer = (state = {feeling: '', understanding: '', support: '', comment: ''}, action) => {
    console.log('In feedbackreducer');
    console.log(action.type);
    if(action.type == "feeling"){
        console.log('in');
        return {...state, feeling: action.payload};
    }
    else if (action.type == 'understanding'){
        console.log('in');
        return {...state, understanding: action.payload};        
    }
    else if (action.type == 'support'){
        console.log('in');
        return {...state, support: action.payload};
    }
    else if (action.type == 'comment'){
        console.log('in');        
        return {...state, comment: action.payload};            
    } else {
    return state;
    }
} // end feedbackReducer

const storeInstance = createStore(
    combineReducers({
        databaseReducer,
        feedbackReducer
    }),
    applyMiddleware(logger)
);
 
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
