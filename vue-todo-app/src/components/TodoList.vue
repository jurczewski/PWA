<template>
  <div>
    <input type="text" class="todo-input" placeholder="What to do, what to do..."
           v-model="newTodo"
           @keyup.enter="addTodo">

    <TodoItem v-for="todo in todosFiltered" :key="todo.id"
              :todo="todo"
              :checkAll="!anyRemaining"
              @remove-todo="removeTodo"
              @save-edit="finishedEdit"/>

    <div class="extra-container">
      <div>
        <label>
          <input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos"/> Toggle All
        </label>
      </div>
      <div>{{ remaining }} items left</div>
    </div>

  </div>
</template>

<script>
    import TodoItem from './TodoItem'

    export default {
        name: 'TodoList',
        components: {
            TodoItem,
        },
        data () {
            return {
                newTodo: '',
                nextTodoId: 3,
                todoList: []
            }
        },
        computed: {
            remaining() {
                return this.todoList.filter(todo => !todo.completed).length;
            },
            anyRemaining() {
                return this.remaining !== 0;
            },
            todosFiltered() {
                if (this.filter === 'all') {
                    return this.todoList;
                } else if (this.filter === 'active') {
                    return this.todoList.filter(todo => !todo.completed);
                } else if (this.filter === 'completed') {
                    return this.todoList.filter(todo => todo.completed);
                }

                return this.todoList
            },
        },
        methods: {
            addTodo() {
                if (this.newTodo.trim().length === 0) {
                    return;
                }

                this.todoList.push({
                    id: this.nextTodoId,
                    title: this.newTodo,
                    completed: false,
                });

                this.newTodo = '';
                this.nextTodoId ++;
            },
            removeTodo(id) {
                const index = this.todoList.findIndex((item) => item.id === id);
                this.todoList.splice(index, 1);
            },
            checkAllTodos() {
                this.todoList.forEach((todo) => todo.completed = event.target.checked)
            },
            finishedEdit(data) {
                const index = this.todoList.findIndex((item) => item.id === data.id);
                this.todoList.splice(index, 1, data);
            }
        }
    }
</script>

<style lang="scss">
  .todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus {
      outline: 0;
    }
  }

  .extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
  }

  button {
    font-size: 14px;
    background-color: white;
    appearance: none;

    &:hover {
      background: lightgreen;
    }

    &:focus {
      outline: none;
    }
  }

  .active {
    background: lightgreen;
  }
</style>