import CustomInput from '../CustomInput.vue'
import { mount } from '@vue/test-utils'

describe('CustomInput.vue', () => {
  test('fills in the form', async () => {
    const wrapper = mount(CustomInput, {
      props: {
        label: 'custom input'
      }
    })

		await wrapper.find('.form-input').setValue('test')

		expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })
})
