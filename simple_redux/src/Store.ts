import Dispatcher from './EventEmitter'

export default class Store extends Dispatcher {
  newTodo: string = ''
  todos: string[] = []

  constructor(dispatcher: Dispatcher) {
    super()
    dispatcher.on('UPDATE_NEW_TODO', this.onUpdateNewTodo)
    dispatcher.on('ADD_TO_TODOS', this.onAddToTodos)
  }

  getNewTodo = () => this.newTodo

  getTodos = () => this.todos

  onUpdateNewTodo = (newTodo: string) => {
    this.newTodo = newTodo
    this.emit('CHANGE')
  }

  onAddToTodos = () => {
    this.todos = [this.newTodo, ...this.todos]
    this.newTodo = ''
    this.emit('CHANGE')
  }
}
