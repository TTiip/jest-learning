import Form from '../Form.vue'
import { mount } from '@vue/test-utils'

describe('Form', () => {
	test('set email value', async () => {
		const emailValue = 'my@email.com'
		const wrapper = mount(Form)
		const input = wrapper.find('input')
		// 设置 email 值
		await input.setValue(emailValue)
		// 验证
		expect(input.element.value).toBe(emailValue)
	})

	test('trigger', async () => {
		const wrapper = mount(Form)

		await wrapper.find('button').trigger('click')

		expect(wrapper.emitted()).toHaveProperty('submit')
	})

	test('emits the input to its parents', async () => {
		const emailValue = 'my@email.com'
		const wrapper = mount(Form)
		const input = wrapper.find('input')

		// set value
		await input.setValue(emailValue)

		// trigger element event
		await wrapper.find('button').trigger('click')

		// get 'submit' event is emitted params
		expect(wrapper.emitted('submit')[0][0]).toBe(emailValue)
	})
})