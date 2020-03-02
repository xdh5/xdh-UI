import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Input from '@/input'
chai.use(sinonChai)

describe('Input.vue', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
})
