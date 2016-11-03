import React from 'react'
import { shallow } from 'enzyme'

import Navigation from '../../src/components/Navigation'

describe('Root component', () => {
  it('should render without problems', () => {
    const wrapper = shallow(<Navigation menus={[{ name:'Hello', link:'/hello' }]} selected={'/hello'} />)
    expect(wrapper.find('.menu')).to.have.length(1)
  })
})