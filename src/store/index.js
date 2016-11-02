import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import throttle from 'lodash/throttle'

// Apply the middleware to the store
import rootSaga from '../saga'
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'
import configDevTools from '../config/DevTools'

const sagaMiddleware = createSagaMiddleware()

const store = window.store = createStore(
  rootReducer,
  loadState(),
  compose(
    applyMiddleware(
      routerMiddleware(hashHistory),
      loadingBarMiddleware(),
      sagaMiddleware,
      createLogger()
    ),
    configDevTools()
  )
)

sagaMiddleware.run(rootSaga)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
