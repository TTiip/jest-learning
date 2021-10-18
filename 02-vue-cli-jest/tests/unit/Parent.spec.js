import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  test('willMount', () => {
    const wrapper = mount(Parent)
    console.log(wrapper.html())
  })

  // 建议工作中使用 shallowMount
  test("with shallowMount", () => {
    const wrapper = shallowMount(Parent)
    console.log(wrapper.html())
  });
})
