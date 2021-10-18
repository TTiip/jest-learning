<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      class='todo-item'
      :class="[todo.choose ? 'choose' : '']"
    >
      {{ todo.text }}
      <input class="checkbox" data-test="checkbox" type="checkbox" v-model="todo.choose" />
    </div>

    <form class="form-box" data-test="form" @submit.prevent="createTodo">
      <input class="form-input" data-test="newTodo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',

  data() {
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          choose: false
        }
      ]
    }
  },

  methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        choose: false
      })
    }
  }
}
</script>
