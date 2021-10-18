import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList', () => {
  test('renders a todo', () => {
    const wrapper = shallowMount(TodoList)
    // 一 写法
    // const todo = wrapper.get('[data-test=todo]')

    // 二 写法
    const todo = wrapper.get('.todoItem')
    expect(todo.text()).toBe('Learn Vue.js 3')
  })
})
