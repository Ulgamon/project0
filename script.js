class Todo {
  constructor(text) {
    this.checked = false
    this.text = text
    this.date = Date.now()
  }
}

let todos = []

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  alert('New TODO button clicked!')
}
