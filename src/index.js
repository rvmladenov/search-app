import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import TemplateStore from './store/reducers/TemplatesStore';
import QuestionsStore from './store/reducers/QuestionsStore';
import ResultStore from './store/reducers/ResultsStore';
import modifyDataBeforeStore from './store/middleware/ModifyDataBeforeStore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ 
  templates: TemplateStore,
  questions: QuestionsStore,
  results: ResultStore });

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(modifyDataBeforeStore, thunk) ));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename="/search-app">
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
