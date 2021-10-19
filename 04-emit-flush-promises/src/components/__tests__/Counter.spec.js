import Counter from '../Counter.vue'
import { mount, flushPromises } from '@vue/test-utils'

describe('Counter.vue', () => {
	test('判断属性是否在对象中', async () => {
		const options = {
			hash: true,
			test: {
				aa: 11
			}
		}
		// toHaveProperty 用来判断 对象中是否存在 某个属性
		expect(options).toHaveProperty('hash')
	})

	test('increment 接受参数', async () => {
		const emitMsg = { testMsg: 'testMsg'}
		const wrapper = mount(Counter)

		// 触发事件
		wrapper.vm.$emit('increment')
		wrapper.vm.$emit('increment', emitMsg)

		// 等待事件处理完成
		await wrapper.vm.$nextTick()

		// 断言事件已经被触发
		expect(wrapper.emitted('increment')).toBeTruthy()

		// 断言事件 的 数量
		expect(wrapper.emitted('increment').length).toBe(2)

		// 断言事件的传入的参数
		// expect(wrapper.emitted('increment')[0] 表示传入第1个的emit
		// expect(wrapper.emitted('increment')[0][0] 表示传入第1个的 emit 的参数
		expect(wrapper.emitted('increment')[0]).toEqual([])

		expect(wrapper.emitted('increment')[1][0]).toEqual(emitMsg)
	})

	describe('emit input', () => {
    test('子组件触发emit事件', async () => {
      const wrapper = mount(Counter)
      // 找到 Child 组件
      const Child = wrapper.findComponent({ name: 'Child' })

      Child.vm.$emit('to-parent')

			// 写法 一 ！！
      await flushPromises()

      // 验证 组件内容中 是否 含有 对应字段
      expect(wrapper.text()).toContain('true')

			// 或者 写法 二 ！！
			// wrapper.vm.$nextTick(() => {
			// 	expect(wrapper.text()).toContain('true')
			// 	done()
			// })
    })
  })
})
