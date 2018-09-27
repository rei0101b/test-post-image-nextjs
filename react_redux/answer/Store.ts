import ActionTypes from './ActionTypes'

export interface Store {
  todos: string[]
  newTodo: string
}

const initial: Store = {
  todos: [],
  newTodo: ''
}

export default (state = initial, action: any): Store => {
  switch (action.type) {
    case ActionTypes.ADD_TO_TODOS: {
      return {
        ...state,
        todos: [...state.todos, state.newTodo],
        newTodo: ''
      }
    }
    case ActionTypes.UPDATE_NEW_TODO: {
      return {
        ...state,
        newTodo: action.newTodo
      }
    }
    default:
      return state
  }
}
