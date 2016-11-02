import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import DevTools from './DevTools'

const Root = ({ store, router }) => (
  <Provider store={store}>
    <div>
      {router}
      {!window.devToolsExtension ? <DevTools /> : null}
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root