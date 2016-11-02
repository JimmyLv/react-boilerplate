import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { AppContainer, routes } from './containers'
import { SAY_HELLO } from './constants/actionTypes'
import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

const renderRouter = () => (
  <Router history={history}>
    <Route
      path="/"
      component={AppContainer}
      onEnter={() => store.dispatch({ type: SAY_HELLO })}
    >
      <IndexRedirect to="/blog" />
      <Route path="blog">
        <IndexRoute components={routes.Blog} />
      </Route>
      <Route
        path="photo"
        getComponent={(location, callback) => {
          require.ensure([], require => {
            callback(null, require('./containers/routes').Photo)
          }, 'Photo')
        }}
        onEnter={() => alert('This page has not ready yet!')}
      />
      <Route
        path="about"
        getComponent={(location, callback) => {
          require.ensure([], require => {
            callback(null, require('./containers/routes').About)
          }, 'About')
        }}
      />
      <Route
        path="*"
        getComponent={(location, callback) => {
          require.ensure([], require => {
            callback(null, require('./containers/routes').NotFound)
          }, 'NotFound')
        }}
      />
    </Route>
  </Router>
)

export default renderRouter