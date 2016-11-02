import { shallow } from 'enzyme'

import DevTools from '../src/config/DevTools'
import Root from '../src/config/Root.dev'

describe('Root component', () => {
  it('should render without problems', () => {
    const wrapper = shallow(<Root />)
    expect(wrapper.contains(<DevTools />)).to.be.equal(true)
  })
})