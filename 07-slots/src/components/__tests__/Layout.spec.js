import Layout from '../Layout.vue'
import { mount } from '@vue/test-utils'

describe('Layout.vue', () => {
  test('layout default slot', async () => {
    const wrapper = mount(Layout, {
      slots: {
        default: 'Main Content'
      }
    })
    expect(wrapper.find('main').text()).toContain('Main Content')
  })
})
