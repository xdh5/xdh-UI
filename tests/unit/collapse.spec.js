import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Collapse from '@/collapse/collapse'
chai.use(sinonChai)

describe('Collapse.vue', () => {
  it('存在.', () => {
    expect(Collapse).to.exist
  })
})
