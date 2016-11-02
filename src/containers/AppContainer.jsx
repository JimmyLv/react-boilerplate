import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import './AppContainer.less'
import type { Guy } from '../constants/state.flow'
import { Navigation } from '../components'

type PropsType = {
  names: Array<string>,
  dispatch: Function,
  children: ReactElement
}

const menusProps = {
  selected: 'Blog',
  menus: [
    { name: 'Hello', link: '/hello' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blog' },
    { name: 'Photo', link: '/photo' },
    { name: 'Zhihu', link: '/routes/zhihu' }
  ]
}

const AppContainer =
  ({ names, dispatch, children }: PropsType) => (
    <div className="main-app">
      <LoadingBar />
      <Navigation {...menusProps}/>
      <h1>Welcome {names.join(' & ')}</h1>
      {children}
    </div>
  )

export default connect(
  ({ guys } : {guys: Array<Guy>}) => ({
    names: guys.map(guy => guy.name),
  })
)(AppContainer)
