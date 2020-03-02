import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Tab from '@/tab/tab'
import TabItem from '@/tab/tab-item'
import TabPane from '@/tab/tab-pane'
chai.use(sinonChai)

describe('Tabs.vue', () => {
  it('存在.', () => {
    expect(Tab).to.exist
    expect(TabItem).to.exist
    expect(TabPane).to.exist
  })
})
