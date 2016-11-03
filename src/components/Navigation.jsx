import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

type PropsType = {
  menus: Array<{
    name: string,
    link: string
  }>,
  selected: string
}

const Navigation = ({ menus, selected }: PropsType) => (
  <div className="menu m-hide">
    {menus.map((menu, index) => (
      <Link
        style={{ margin: '5px'}}
        key={index}
        className={classnames({ 'active': selected.includes(menu.link) })}
        to={menu.link}
      >{menu.name}</Link>)
    )}
    <strong><a href="https://github.com/JimmyLv/nobackend.website" target="_blank">GitHub</a></strong>
  </div>
)

export default Navigation
