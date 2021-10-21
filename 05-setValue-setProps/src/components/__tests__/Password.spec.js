import Password from '../Password.vue'
import { mount } from '@vue/test-utils'

describe('Password.vue', () => {
	test('render an error if length is too short with change data', async () => {
		const minLength = 10
		const errorMsg =`Password must be at least ${minLength} characters.`
		// 实例化 + 设置props
		const wrapper = mount(Password, {
			props: {
				minLength
			}
		})

		// 设置password 变量
		await wrapper.find('.form-input').setValue('test')

		// 根据结果判断
		expect(wrapper.text()).toContain(errorMsg)

		await wrapper.find('.form-input').setValue('test value more then minLength')

		// 根据结果判断
		expect(wrapper.text()).not.toContain(errorMsg)
	})
})