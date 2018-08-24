import ActionTypes from './ActionTypes'

export const addToTodos = () => ({
  type: ActionTypes.ADD_TO_TODOS
})

export const updateNewTodo = (newTodo: string) => ({
  type: ActionTypes.UPDATE_NEW_TODO,
  newTodo
})
