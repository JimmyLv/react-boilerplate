import React from 'react'
import ReactDOM from 'react-dom'

import '!file?name=[name].[ext]!../manifest.json'
import 'base.less'

import Root from './config/Root'
import store from './store'
import renderRouter from './router'

ReactDOM.render(
  <Root store={store} router={renderRouter()}/>,
  document.getElementById('app')
)
