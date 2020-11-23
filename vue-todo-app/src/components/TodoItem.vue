<template>
  <div class="todo-item">
    <div class="item-content">
      <input type="checkbox" v-model="completed" @change="saveEdit">

      <div v-if="!editing" class="item-label" :class="{ completed : completed }"
           @dblclick="editTodo">
        {{ title }}
      </div>

      <input v-else class="item-edit" type="text"
             v-model="title"
             @blur="saveEdit"
             @keyup.enter="saveEdit"
             @keyup.esc="cancelEdit" v-focus>
    </div>

    <div class="remove-item" @click="removeTodo(todo.id)">
      &times;
    </div>
  </div>
</template>

<script>
    export default {
        name: 'todo-item',
        props: {
            todo: {
                type: Object,
                required: true,
            },
            checkAll: {
                type: Boolean,
                required: true,
            }
        },
        data() {
            return {
                'id': this.todo.id,
                'title': this.todo.title,
                'completed': this.todo.completed,
                'editing': this.todo.editing,
                'beforeEditCache': '',
            }
        },
        watch: {
            checkAll() {
                this.completed = this.checkAll ? true : this.todo.completed;
            }
        },
        directives: {
            focus: {
                mounted (el) {
                    el.focus();
                }
            }
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id);
            },
            editTodo() {
                this.beforeEditCache = this.title;
                this.editing = true;
            },
            saveEdit() {
                if (this.title.trim() === '') {
                    this.title = this.beforeEditCache;
                }
                this.editing = false;
                this.$emit('save-edit', {
                    'id': this.id,
                    'title': this.title,
                    'completed': this.completed,
                    'editing': this.editing,
                });
            },
            cancelEdit() {
                this.title = this.beforeEditCache;
                this.editing = false;
            },
        }
    }
</script>

<style scoped lang="scss">
  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;

    .item-content {
      display: flex;
      align-items: center;

      .item-label {
        padding: 10px;
        border: 1px solid white;
        margin-left: 12px;
      }

      .item-edit {
        font-size: 24px;
        color: #2c3e50;
        margin-left: 12px;
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
      }
    }
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }

  .remove-item {
    cursor: pointer;
    margin-left: 14px;

    &:hover {
      color: black;
    }
  }

</style>