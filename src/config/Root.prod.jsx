import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

const Root = ({ store, router }) => (
  <Provider store={store}>
    {router}
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root