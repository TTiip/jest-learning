import Show from '../Show.vue'
import { mount } from '@vue/test-utils'

describe('Show.vue', () => {
	test('renders a greeting when show is true', async () => {
		const greeting = 'hello is me'
		const wrapper = mount(Show, {
			data: () => ({
				greeting
			})
		})
		// 判断是否 是否存在传入的 变量
		expect(wrapper.text()).toContain(greeting)

		// 操作显隐字段 判断 显示功能 是否正常
		await wrapper.setProps({
			show: false
		})

		// 验证是否 存在对应的变量 字段
		expect(wrapper.text()).not.toContain(greeting)
	})
})