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
import AuthStore from './store/reducers/AuthStore';
import modifyDataBeforeStore from './store/middleware/ModifyDataBeforeStore';
import Login from './containers/Auth/Login';
// import Home from './containers/Home/Home';
import { Route, Switch, Redirect } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ 
  templates: TemplateStore,
  questions: QuestionsStore,
  results: ResultStore,
  auth: AuthStore
});

const store = createStore(rootReducer, composeEnhancers( applyMiddleware(modifyDataBeforeStore, thunk) ));

/* <BrowserRouter basename="/search-app"> */
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>

        <Switch>
            <Route path="/home" component={App} />
            <Route path="/login" component={Login} />
            <Redirect exact from="/" to="/home" />
        </Switch>

        { store.getState().auth.authorized ? <Redirect to="/home" /> : <Redirect to="/login" /> }
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
