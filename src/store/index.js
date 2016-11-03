import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import throttle from 'lodash/throttle'

import rootSaga from '../saga'
import rootReducer from '../reducers'
import { loadState, saveState } from './localStorage'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = window.store = createStore(
  rootReducer,
  loadState(),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(hashHistory),
      loadingBarMiddleware(),
      sagaMiddleware,
      createLogger()
    )
  )
)

sagaMiddleware.run(rootSaga)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
