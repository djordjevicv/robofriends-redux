import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './containers/App';
import App2 from './containers/App2'
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

//const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ThunkMiddleware)));

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App2 />
   </Provider>
);
