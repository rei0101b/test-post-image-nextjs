import * as React from 'react'
import { MouseEventHandler, ChangeEventHandler } from 'react'
import ActionCreator from './ActionCreator'
import Store from './Store'
import EventEmitter from './EventEmitter'

const dispatcher = new EventEmitter()
const action = new ActionCreator(dispatcher)
const store = new Store(dispatcher)

interface State {
  todos: string[]
  newTodo: string
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      todos: store.getTodos(),
      newTodo: store.getNewTodo()
    }

    store.on('CHANGE', this.onChangeStore)
  }

  onChangeStore = () =>
    this.setState({
      newTodo: store.getNewTodo(),
      todos: store.getTodos()
    })

  onUpdateNewTodo: ChangeEventHandler<HTMLInputElement> = e => action.updateNewTodo(e.target.value)

  onClickSubmit: MouseEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    action.addToTodos()
  }

  render() {
    const { newTodo, todos } = this.state
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>TODO list</h1>
        <form>
          <input
            style={{
              border: 'solid 1px rgba(0, 0, 0, .1)',
              padding: '0.5em',
              marginRight: '1em'
            }}
            value={newTodo}
            onChange={this.onUpdateNewTodo}
          />
          <input type="submit" onClick={this.onClickSubmit} />
        </form>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
