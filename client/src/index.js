import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { getUsers } from './actions/users.action';

//dev tools from here
import { composeWithDevTools } from 'redux-devtools-extension';
//import logger from 'redux-logger';

import reportWebVitals from './reportWebVitals';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) //, logger)) post from reducer into console
)

store.dispatch(getUsers())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
