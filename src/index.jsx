import React from 'react'
import ReactDOM from 'react-dom'
import { Provider }from 'react-redux'

import '!file?name=[name].[ext]!../manifest.json'
import 'base.less'

import store from './store'
import renderRouter from './router'

ReactDOM.render(
  <Provider store={store}>
    {renderRouter()}
  </Provider>,
  document.getElementById('app')
)
