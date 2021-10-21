import CustomRadio from '../CustomRadio.vue'
import { mount } from '@vue/test-utils'

import { ElRadio, ElButton } from 'element-plus'

describe('CustomRadio.vue', () => {
  test('emits textarea value on click', async () => {
    // 全局注入需要测试的组件
    // https://next.vue-test-utils.vuejs.org/api/#global
    const wrapper = mount(CustomRadio, {
      global: {
        components: {
          ElRadio,
          ElButton
        }
      }
    })

    // setting raio value
    wrapper.findComponent({ name: 'el-radio' }).setValue(true)

    // button element event trigger
    await wrapper.findComponent({ name: 'el-button' }).trigger('click')

    // check result
    expect(wrapper.emitted('submit')[0][0]).toBe(true)
  })
})
