import Dispatcher from './EventEmitter'

export default class ActionCreator {
  constructor(private dispatcher: Dispatcher) {}

  updateNewTodo = (newTodo: string) => this.dispatcher.emit('UPDATE_NEW_TODO', newTodo)

  addToTodos = () => this.dispatcher.emit('ADD_TO_TODOS')
}
