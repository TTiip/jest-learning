import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList', () => {
  test('renders a todo', () => {
    const wrapper = shallowMount(TodoList)
    // 一 写法 通过自定义属性
    // const todo = wrapper.find('[data-test=todo]')

    // 二 写法 通过类名 标签名 id名
    const todo = wrapper.find('.todo-item')
    expect(todo.text()).toBe('Learn Vue.js 3')
  })


  test('create a todo', async () => {
    const wrapper = shallowMount(TodoList)
    const input = wrapper.find('.form-input')

    // 先判断默认的 todo
    expect(wrapper.findAll('.todo-item').length).toBe(1)
    // 注意：！！！！！！！！！！
    // 涉及到 设置值 触发操作一定要记得加await ！！！！！！！！

    // 设置input值
    await input.setValue('some value')
    // 触发提交按钮点击
    const formBox = wrapper.find('.form-box')
    await formBox.trigger("submit")

    // 添加以后 验证是不是长度为2
    console.log(wrapper.findAll('.todo-item').length)
    expect(wrapper.findAll('.todo-item').length).toBe(2)
  })

  test('choose a todo', async () => {
    const wrapper = shallowMount(TodoList)
    const checkbox = wrapper.find('.checkbox')
    const todo = wrapper.find('.todo-item')
    // 设置checkBox值
    await checkbox.setChecked(true)
    // 判断class数组中是否有对应的class类名
    // 通过js includes 去判断
    expect(todo.classes().includes('choose')).toBe(true)

    // 通过提供的api判断
    // expect(todo.classes()).toContain('choose')
  })
})
