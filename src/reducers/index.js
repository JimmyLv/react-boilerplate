import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import guys from './guys'

export default combineReducers({
  [guys.NAME]: guys.reducer,
  routing: routerReducer,
  loadingBar: loadingBarReducer
})
