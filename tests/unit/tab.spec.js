import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Tab from '@/components/tab/tab'
import TabPane from '@/components/tab/tab-pane'
import TabItem from '@/components/tab/tab-item'

chai.use(sinonChai)

describe('Tab.vue', () => {
  it('存在.', () => {
    expect(Tab).to.exist
  })
})

describe('TabItem.vue', () => {
  it('存在.', () => {
    expect(TabItem).to.exist
  })
})

describe('TabPane.vue', () => {
  it('存在.', () => {
    expect(TabPane).to.exist
  })
})